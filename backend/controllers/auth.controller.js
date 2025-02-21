import User from "../models/user.model.js"
// import mongoose from "mongoose"

export const getUser = async (req, res) => {

    const id = req.params.id

    try {
        const user = await User.findById(id)
        res.status(200).json({success: true, data: user})
    } catch (error) {
        console.log("Error is getting User: ", error.message)
        res.status(404).json({success: false, message: "Id Not Found"})
    }
}

export const signinUser = async (req, res) => {

    const user = req.body
    const existingUser = await User.findOne({ email: user.email });

    if (!existingUser){
        return res.status(400).json({message: 'User Does Not Exist'})
    }
    if (!user.email || !user.password){
        return res.status(400).json({message: 'All Fields Required'})
    }
    

    try {
        if(user.password === existingUser.password){
            res.status(200).json({success: true, data: existingUser})
        } else {
            res.status(400).json({success: false, message: "Password Incorrect"})
        }
    } catch (error) {
        console.log("Error is signing in User: ", error.message)
        res.status(500).json({success: false, message: error.message})
    }
}

export const signupUser = async (req, res) => {

    const user = req.body
    const existingUser = await User.findOne({ email: user.email });

    if (existingUser){
        return res.status(400).json({message: 'AUser Already Exists'})
    }
    if (!user.name || !user.email || !user.password){
        return res.status(400).json({message: 'All Fields Required'})
    }
    if (user.password.length < 6){
        return res.status(400).json({message: 'Minimum 6 characters in Password'})
    }
    // if (user.email != 'nirmal@gmail.com'){
    //     return res.status(400).json({message: 'Enter vaild Email Id'})
    // }

    const newUser = new User(user)

    try {
        await newUser.save();
        res.status(201).json({success: true, data: newUser});
    } catch(error) {
        console.error("Error in Signing up User: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const signoutUser = async (req, res) => {


    try {
        // clear session and redirect to welcome page
    } catch (error) {
        console.log("Error is signing out User: ", error.message)
        res.status(500).json({success: false, message: error.message})
    }
}