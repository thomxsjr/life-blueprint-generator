import UserMetrics from "../models/UserMetrics.model.js"

export const getUserMetrics = async (req, res) => {

    const email = req.params.email

    if(!req.session.user){
        return res.status(401).json({success: false, message: "Unauthorized"})
    }

    try {
        const userMetrics = await UserMetrics.findOne({email: email})

        if (!userMetrics) {
            console.warn("User not found for email:", email);
            return res.status(404).json({ success: false, message: "User Metrics not found" });
        }
        res.status(200).json({success: true, data: userMetrics})
    } catch (error) {
        console.log("Error is getting User: ", error.message)
        res.status(500).json({success: false, message: "Internal Server Error"})
    }

}

export const createUserMetrics = async (req, res) => {

    const userMetrics = req.body
    const email = userMetrics.email
    const existingUserMetrics = await UserMetrics.findOne({ email: email });

    if (existingUserMetrics){
        return res.status(400).json({sucess:false, message: 'User Details Already Saved'})
    }

    const newUserMetrics = new UserMetrics({...userMetrics})

    try {
        await newUserMetrics.save()
        res.status(201).json({success: true, data: newUserMetrics});
    } catch (error) {
        console.error("Error in Saving User Details: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});  
    }

}

export const updateUserMetrics = () => {

}