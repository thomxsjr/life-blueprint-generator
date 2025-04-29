from flask import Flask, jsonify
import pandas as pd
from stable_baselines3 import SAC, PPO
import numpy as np
import os
import pickle
import gym
from gym import spaces

app = Flask(__name__)

# Model paths
SAC_MODEL_PATH = "./sac_life_logs/best_model/best_model.zip"
PPO_MODEL_PATH = "./ppo_life_logs/best_model/best_model.zip"
FALLBACK_SAC_MODEL_PATH = "./models/life-blueprint-model/sac_robust_life_model.zip"
FALLBACK_PPO_MODEL_PATH = "./models/life-blueprint-model/ppo_robust_life_model.zip"

final_sac_model_path = SAC_MODEL_PATH if os.path.exists(SAC_MODEL_PATH) else FALLBACK_SAC_MODEL_PATH
final_ppo_model_path = PPO_MODEL_PATH if os.path.exists(PPO_MODEL_PATH) else FALLBACK_PPO_MODEL_PATH

# Load models
if not os.path.exists(final_sac_model_path) or not os.path.exists(final_ppo_model_path):
    print(f"Warning: Cannot find trained models at {final_sac_model_path} or {final_ppo_model_path}.")
    sac_model = None
    ppo_model = None
else:
    print(f"Loading SAC model from: {final_sac_model_path}")
    sac_model = SAC.load(final_sac_model_path)
    print(f"Loading PPO model from: {final_ppo_model_path}")
    ppo_model = PPO.load(final_ppo_model_path)

# Load state utilities and initial state vectors
if not os.path.exists("./models/life-blueprint-model/state_utils.pkl") or not os.path.exists("./models/life-blueprint-model/initial_state_vectors.npy"):
    raise FileNotFoundError("State utils or initial state vectors not found. Please run Step 2 first.")

with open("./models/life-blueprint-model/state_utils.pkl", "rb") as f:
    state_utils = pickle.load(f)
    state_index_map = state_utils["index_map"]
    scalers = state_utils["scalers"]
    mappings = state_utils["mappings"]
    initial_state_vectors = np.load("./models/life-blueprint-model/initial_state_vectors.npy")

# Select initial state
planning_start_index = 75
if planning_start_index >= len(initial_state_vectors):
    print(f"Warning: planning_start_index {planning_start_index} is out of bounds ({len(initial_state_vectors)} available). Using index 0.")
    planning_start_index = 0
initial_state_sample = initial_state_vectors[planning_start_index].copy().astype(np.float32)
print(f"Generating plan starting from initial state index: {planning_start_index}")

# Placeholder for RobustLifeEnv - Replace with actual implementation
class RobustLifeEnv(gym.Env):
    def __init__(self, initial_states, index_map, scalers, mappings, action_type="SAC"):
        super(RobustLifeEnv, self).__init__()
        self.initial_states = initial_states
        self.index_map = index_map
        self.scalers = scalers
        self.mappings = mappings
        self.action_type = action_type
        self.current_step = 0
        self.max_steps = 10
        self.observation_space = spaces.Box(low=-np.inf, high=np.inf, shape=(initial_states.shape[1],), dtype=np.float32)
        if action_type == "SAC":
            self.action_space = spaces.Box(low=0, high=1, shape=(2,), dtype=np.float32)
        elif action_type == "PPO":
            self.action_space = spaces.Discrete(3)
        else:
            raise ValueError("Invalid action_type")
        self.state = None

    def reset(self):
        self.current_step = 0
        self.state = self.initial_states[0].copy()  # Simplified; adjust as needed
        return self.state

    def step(self, action):
        # Placeholder: Implement actual step logic
        self.state = self.state
        reward = 0.0
        done = self.current_step >= self.max_steps
        self.current_step += 1
        return self.state, reward, done, {}

    def _get_state_value(self, feature_name):
        idx = self.index_map.get(feature_name)
        if idx is None:
            raise KeyError(f"Feature '{feature_name}' not found.")
        scaler = self.scalers.get(feature_name)
        if scaler is None:
            raise KeyError(f"Scaler for '{feature_name}' not found.")
        val_normalized = self.state[idx]
        original_value = scaler.inverse_transform([[val_normalized]])[0, 0]
        return original_value

# Plan generation function
def generate_robust_life_plan_single(model, env_class, initial_state, action_type):
    if model is None:
        print(f"Model for {action_type} not loaded. Skipping plan generation.")
        return pd.DataFrame()

    env = env_class(initial_state_vectors, state_index_map, scalers, mappings, action_type=action_type)
    obs = initial_state.copy()
    env.state = obs.copy()
    env.current_step = 0
    plan = []
    total_reward = 0.0
    max_plan_steps = env.max_steps

    for step in range(max_plan_steps):
        action, _ = model.predict(obs, deterministic=True)
        step_action = action.item() if action_type == "PPO" and isinstance(action, np.ndarray) else action
        obs, reward, done, info = env.step(step_action)
        year_data = {}
        try:
            year_data["Year"] = 2025 + step
            year_data["Age"] = env._get_state_value('Age')
            year_data["Salary"] = env._get_state_value('Salary')
            year_data["Savings"] = env._get_state_value('Savings')
            year_data["Debt"] = env._get_state_value('Debt')
            year_data["Stress"] = env._get_state_value('Stress_Level')
            year_data["Health_Satisfaction"] = env._get_state_value('Health_Satisfaction')
            year_data["Career_Satisfaction"] = env._get_state_value('Career_Satisfaction')
            year_data["Financial_Satisfaction"] = env._get_state_value('Financial_Satisfaction')
        except Exception as e:
            print(f"Error getting state value during plan generation at step {step}: {e}")
            for k in ["Age", "Salary", "Savings", "Debt", "Stress", "Health_Satisfaction", "Career_Satisfaction", "Financial_Satisfaction"]:
                year_data[k] = np.nan

        if action_type == "SAC":
            act_vals = action.flatten()
            hours = act_vals[0] * 10
            perc = act_vals[1] * 30
            action_str = f"Exercise {hours:.1f} hrs/wk, Save {perc:.1f}%/mo"
        else:
            action_map = {0: "Learn Skill", 1: "Focus Health", 2: "Focus Finance"}
            action_str = action_map.get(step_action, f"Unknown Action ({step_action})")

        year_data["Action"] = action_str
        year_data["Reward"] = float(reward)
        total_reward += float(reward)
        plan.append(year_data)

        if done:
            print(f"Planning finished after {step+1} steps (Done signal received).")
            break
    else:
        print(f"Planning finished after {max_plan_steps} steps (Max steps reached).")

    print(f"Total Accumulated Reward over Plan: {total_reward:.2f}")
    return pd.DataFrame(plan)

# Flask route for life prediction
@app.route('/life-predict', methods=['POST'])
def life_predict():
    try:
        sac_plan_json = "SAC model not available"
        if sac_model:
            sac_plan = generate_robust_life_plan_single(sac_model, RobustLifeEnv, initial_state_sample, "SAC")
            if not sac_plan.empty:
                sac_plan_json = sac_plan.to_json(orient='records')

        ppo_plan_json = "PPO model not available"
        if ppo_model:
            ppo_plan = generate_robust_life_plan_single(ppo_model, RobustLifeEnv, initial_state_sample, "PPO")
            if not ppo_plan.empty:
                ppo_plan_json = ppo_plan.to_json(orient='records')

        response = {
            "sac_plan": sac_plan_json,
            "ppo_plan": ppo_plan_json
        }
        return jsonify(response), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)