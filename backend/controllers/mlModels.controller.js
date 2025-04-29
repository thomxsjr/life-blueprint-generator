import OpenAI from "openai";


export const lifeBlueprintGenerate = async (req, res) => {

    // const { prompt } = req.body;
    const prompt = {
        "ppo_plan": "[{\"Year\":2025,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Focus Health\",\"Reward\":0.0},{\"Year\":2026,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Focus Health\",\"Reward\":0.0},{\"Year\":2027,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Focus Health\",\"Reward\":0.0},{\"Year\":2028,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Focus Health\",\"Reward\":0.0},{\"Year\":2029,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Focus Health\",\"Reward\":0.0},{\"Year\":2030,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Focus Health\",\"Reward\":0.0},{\"Year\":2031,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Focus Health\",\"Reward\":0.0},{\"Year\":2032,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Focus Health\",\"Reward\":0.0},{\"Year\":2033,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Focus Health\",\"Reward\":0.0},{\"Year\":2034,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Focus Health\",\"Reward\":0.0}]",
        "sac_plan": "[{\"Year\":2025,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Exercise 9.7 hrs\/wk, Save 21.7%\/mo\",\"Reward\":0.0},{\"Year\":2026,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Exercise 9.7 hrs\/wk, Save 21.7%\/mo\",\"Reward\":0.0},{\"Year\":2027,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Exercise 9.7 hrs\/wk, Save 21.7%\/mo\",\"Reward\":0.0},{\"Year\":2028,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Exercise 9.7 hrs\/wk, Save 21.7%\/mo\",\"Reward\":0.0},{\"Year\":2029,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Exercise 9.7 hrs\/wk, Save 21.7%\/mo\",\"Reward\":0.0},{\"Year\":2030,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Exercise 9.7 hrs\/wk, Save 21.7%\/mo\",\"Reward\":0.0},{\"Year\":2031,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Exercise 9.7 hrs\/wk, Save 21.7%\/mo\",\"Reward\":0.0},{\"Year\":2032,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Exercise 9.7 hrs\/wk, Save 21.7%\/mo\",\"Reward\":0.0},{\"Year\":2033,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Exercise 9.7 hrs\/wk, Save 21.7%\/mo\",\"Reward\":0.0},{\"Year\":2034,\"Age\":30.000000298,\"Salary\":440692.006563738,\"Savings\":305784.0003264248,\"Debt\":0.0,\"Stress\":10.0,\"Health_Satisfaction\":10.0,\"Career_Satisfaction\":7.0000001788,\"Financial_Satisfaction\":10.0,\"Action\":\"Exercise 9.7 hrs\/wk, Save 21.7%\/mo\",\"Reward\":0.0}]"
    }
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: [
                      {
                        type: "input_text",
                        text: "Create a 10-year life plan using provided scores for Career, Health and Finance only, where each score is between 1 and 10, with 1 being poor and 10 being excellent. Develop a pointwise blueprint with 2-3 specific, actionable steps for each year, totaling to a 10-year plan. Tailor these actions based on the following guidance:\n\n- Scores 1 to 3: Focus on significant changes.\n- Scores 4 to 6: Implement moderate improvements.\n- Scores 7 to 10: Focus on maintenance or enhancements.\n\nEnsure the plan shows progression over time with an emphasis on foundational steps in the first years and more advanced actions in later years.\n\n# Steps\n\n1. Analyze each score category separately to determine the focus for each area.\n2. For scores between 1 to 3, identify the major changes needed and start addressing these in the early years.\n3. If scores range from 4 to 6, outline moderate improvements, spreading them over the first few years and solidifying in later years.\n4. For scores between 7 to 10, focus on maintaining or enhancing the current state, introducing these actions in later years where appropriate.\n5. Create 2-3 specific, actionable steps for each year, ensuring they align with the determined needs.\n6. Ensure the progression is logical and sustainable, leading to substantial improvement or solid maintenance by year 10.\n\n# Output Format\n\n- **Year 1:**\n  - [Action 1]\n  - [Action 2]\n  - [Action 3]\n- **Year 2:**\n  - [Action 1]\n  - [Action 2]\n  - [Action 3]\n- Continue this format for each subsequent year up to Year 10.\n\n# Examples\n\n**Scores: Career: 2, Finances: 5, Physical Health: 8, Mental Health: 3, Relationships: 7, Personal Growth: 6**\n\n- **Year 1:**\n  - Career: Research career transition opportunities and enroll in a relevant course.\n  - Mental Health: Begin therapy sessions; practice daily meditation.\n  - Finances: Create a detailed budget, track spending monthly.\n\n- **Year 2:**\n  - Career: Update resume and attend a job interview workshop.\n  - Mental Health: Continue therapy; join a mindfulness group.\n  - Personal Growth: Set specific educational goals, pursue skill development.\n\n(Examples should contain detailed actions using specific actions relevant to the scores and ensure they show logical progression over the years) \n\n# Notes\n\n- Adjust the specific actions in the placeholders according to the specific scores provided by the user.\n- Plan should consider balance across all life domains, ensuring no area is neglected.\n- Encourage review and modification of the plan as life circumstances or goals evolve."
                      }
                    ]
                },
            { 
                role: "user", 
                content: prompt 
            }],
            temperature: 1,
            max_output_tokens: 2048,
            top_p: 1,
            store: true
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
}