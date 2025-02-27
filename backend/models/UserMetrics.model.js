import mongoose from "mongoose";

const UserMetricsSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        basicInfo: {
            age: {
                type: String,
                required: true,
            },
            gender: {
                type: String,
                required: true,
            },
            isdisable: {
                type: Boolean,
                required: true,
            },
        },
        careerInfo: {
            highestDegree:  {
                type: String,
                required: true,
            },
            currentJob: {
                type: String,
                required: true,
            },
            domainExperience: {
                type: String,
                required: true,
            },
            skills: {
                type: String,
                required: true,
            },
            salarySatisfaction: {
                type: Number,
                required: true,
            },
            careerScore: {
                type: Number,
            },
        },
        healthInfo: {
            healthStatus: {
                type: String,
                required: true,
            },
            medicalCondition: {
                type: String,
                required: true,
            },
            // exerciseMinutes: {
            //     type: String,
            //     required: true,
            // },
            sleepTime: {
                type: Number,
                required: true,
            },
            stressLevel: {
                type: Number,
                required: true,
            },
            DietType: {
                type: String,
                required: true,
            },
            healthScore: {
                type: Number,
            },
        },
        financeInfo: {
            salary: {
                type: String,
                required: true,
            },
            savings: {
                type: String,
                required: true,
            },
            monthlyExpenses: {
                type: String,
                required: true,
            },
            debt: {
                type: String,
                required: true,
            },
            totalAssets: {
                type: String,
                required: true,
            },
            financeScore: {
                type: String,
            },
        }

    },
    {
        timestamps: true,
    }
);

const UserMetrics = mongoose.model("UserMetric", UserMetricsSchema);

export default UserMetrics;