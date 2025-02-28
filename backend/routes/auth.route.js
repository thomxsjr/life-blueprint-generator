import express from "express"
import { getUser, getAuth, signinUser, signupUser, signoutUser } from "../controllers/auth.controller.js"


const authRouter = express.Router()

authRouter.get('/check-auth', getAuth)

authRouter.get("/details/:id", getUser)

authRouter.post("/signin", signinUser)

authRouter.post("/signup", signupUser)

authRouter.post("/signout", signoutUser)

export default authRouter;