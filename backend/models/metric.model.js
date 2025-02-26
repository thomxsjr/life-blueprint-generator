import mongoose from "mongoose";

const metricSchema = new mongoose.Schema(
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
            disabilities: {
                type: Boolean,
                required: true,
            },
        },
        careerInfo: {
            
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;