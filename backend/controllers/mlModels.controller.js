import OpenAI from "openai";
import fetch from 'node-fetch';

export const lifeBlueprintGenerate = async (req, res) => {

  const { age, salary, savings, debt, stress, health_satisfaction, career_satisfaction, finance_satisfaction } = req.body;

  try {
  const response = await fetch("http://127.0.0.1:5000/life-predict", {
    method: "POST",
    body: JSON.stringify({
      age: age,
      salary: salary,
      savings: savings,
      debt: debt,
      stress: stress,
      health_satisfaction: health_satisfaction,
      career_satisfaction: career_satisfaction,
      finance_satisfaction: finance_satisfaction,
    }),
  })

  const tprompt = await response.json();
  
  if (!tprompt || !tprompt.ppo_plan || !tprompt.sac_plan) {
    return res.status(500).json({ success: false, message: 'Missing plan data from Python backend.' });
  }

    function convertPlanToText(planJsonString, title) {
        const planArray = JSON.parse(planJsonString);
        let output = `\n\n=== ${title} ===\n`;
    
        planArray.forEach(yearData => {
            output += `\n**Year ${yearData.Year}:**\n`;
            output += `- Age: ${yearData.Age.toFixed(1)}\n`;
            output += `- Salary: $${yearData.Salary.toFixed(2)}\n`;
            output += `- Savings: $${yearData.Savings.toFixed(2)}\n`;
            output += `- Debt: $${yearData.Debt.toFixed(2)}\n`;
            output += `- Stress Level: ${yearData.Stress}/10\n`;
            output += `- Health Satisfaction: ${yearData.Health_Satisfaction}/10\n`;
            output += `- Career Satisfaction: ${yearData.Career_Satisfaction}/10\n`;
            output += `- Financial Satisfaction: ${yearData.Financial_Satisfaction}/10\n`;
            output += `- Action Plan: ${yearData.Action}\n`;
            output += `- Reward: ${yearData.Reward}\n`;
        });
    
        return output;
    }
    
    const readablePPO = convertPlanToText(tprompt.ppo_plan, "PPO-Based Plan");
    const readableSAC = convertPlanToText(tprompt.sac_plan, "SAC-Based Plan");
    
    const prompt = readablePPO + "\n\n" + readableSAC + "\n\n";




    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: `Create a 10-year life plan. Develop a pointwise blueprint with 2-3 specific, actionable steps for each year, totaling to a 10-year plan. Tailor these actions based on the following guidance:
          
          - Scores 1 to 3: Focus on significant changes.
          - Scores 4 to 6: Implement moderate improvements.
          - Scores 7 to 10: Focus on maintenance or enhancements.
          
          Ensure the plan shows progression over time with an emphasis on foundational steps in the first years and more advanced actions in later years.
          
          # Steps
          
          1. Analyze each score category separately to determine the focus for each area.
          2. For scores between 1 to 3, identify the major changes needed and start addressing these in the early years.
          3. If scores range from 4 to 6, outline moderate improvements, spreading them over the first few years and solidifying in later years.
          4. For scores between 7 to 10, focus on maintaining or enhancing the current state, introducing these actions in later years where appropriate.
          5. Create 2-3 specific, actionable steps for each year, ensuring they align with the determined needs.
          6. Ensure the progression is logical and sustainable, leading to substantial improvement or solid maintenance by year 10.
          
          # Output Format
          
          - **Year 1:**
            - [Action 1]
            - [Action 2]
            - [Action 3]
          - **Year 2:**
            - [Action 1]
            - [Action 2]
            - [Action 3]
          - Continue this format for each subsequent year up to Year 10.
          
          # Examples
          
          
          - **Year 1:**
            - Career: Research career transition opportunities and enroll in a relevant course.
            - Mental Health: Begin therapy sessions; practice daily meditation.
            - Finances: Create a detailed budget, track spending monthly.
          
          - **Year 2:**
            - Career: Update resume and attend a job interview workshop.
            - Mental Health: Continue therapy; join a mindfulness group.
            - Personal Growth: Set specific educational goals, pursue skill development.
          
          (Examples should contain detailed actions using specific actions relevant to the scores and ensure they show logical progression over the years)
          
          # Notes
          
          - Adjust the specific actions in the placeholders according to the specific scores provided by the user.
          - Plan should consider balance across all life domains, ensuring no area is neglected.
          - Encourage review and modification of the plan as life circumstances or goals evolve.`
              },
              {
                role: "user",
                content: prompt 
              }
            ],
            temperature: 1,
            max_tokens: 3000,
            top_p: 1
          });
          

        res.status(200).json({
            success: true,
            data: response.choices[0].message.content,
        });
    } catch (error) {
        console.error("Error generating life blueprint:", error);
        res.status(500).json({
            success: false,
            message: "Error generating life blueprint",
        });
    }
  } catch (error) {
  console.error("Error fetching plan from Python backend:", error);
}
}