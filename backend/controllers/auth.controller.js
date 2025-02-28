import User from "../models/user.model.js"
import bcrypt from "bcryptjs";
// import mongoose from "mongoose"

export const getAuth = (req, res)=> {
    const session = req.session.user
    if(!session){
        return res.status(401).json({
            success: false,
            message: "Unauthorised user!"
          });
    }
    return res.status(200).json({
        success: true,
        message: "Authenticated user!",
        user: {
          _id: session._id,
          name: session.name,
          email: session.email,
        },
      });
}

export const getUser = async (req, res) => {

    const id = req.params.id

    if(!req.session.user){
        return res.status(401).json({success: false, message: "Unauthorized"})
    }

    try {
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" })
          }

        const userData = {
            _id: user._id,
            name: user.name,
            email: user.email,
          }
      
          res.status(200).json({ success: true, data: userData })
    } catch (error) {
        console.log("Error is getting User: ", error.message)
        res.status(404).json({success: false, message: "Id Not Found"})
    }
}

export const signinUser = async (req, res) => {

	const { email, password } = req.body
    const existingUser = await User.findOne({ email: email });

    if (!existingUser){
        return res.status(400).json({success: false, message: 'User Does Not Exist'})
    }
    if (!email || !password){
        return res.status(400).json({success: false, message: 'All Fields Required'})
    }
    

    try {
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect){
            return res.status(400).json({success: false, message: "Password Incorrect"})
        }
        const userForSession = {
            _id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
          }
        req.session.user = userForSession;
        res.status(200).json({success: true, data: userForSession})

    } catch (error) {
        console.log("Error is signing in User: ", error.message)
        res.status(500).json({success: false, message: error.message})
    }
}

export const signupUser = async (req, res) => {

	const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    
    if (existingUser){
        return res.status(400).json({success:false, message: 'User Already Exists'})
    }
    if (!name || !email || !password){
        return res.status(400).json({success:false, message: 'All Fields Required'})
    }
    if (password.length < 6){
        return res.status(400).json({success:false, message: 'Minimum 6 characters in Password'})
    }
    if (!validateEmail(email)){
        return res.status(400).json({success:false, message: 'Invalid Email'})
    }

	const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
		name,
		email,
		password: hashedPassword
	});

    try {
        await newUser.save();
        const userResponse = {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
          }
        res.status(201).json({success: true, data: userResponse});
    } catch(error) {
        console.error("Error in Signing up User: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const signoutUser = async (req, res) => {

    req.session.destroy((err) => {
		if(err) {
			console.log("Error is signing out User: ", err)
            res.status(500).json({success: false, message: err})
		} else {
            res.clearCookie("connect.sid")
			res.status(200).json({success: true, message: "User Signed Out"})
		}
	})
}