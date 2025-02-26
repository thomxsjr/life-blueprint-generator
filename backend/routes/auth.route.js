import express from "express"
import { getUser, signinUser, signupUser, signoutUser } from "../controllers/auth.controller.js"


const authRouter = express.Router()


authRouter.get("/:id", getUser)

authRouter.post("/signin", signinUser)

authRouter.post("/signup", signupUser)

authRouter.post("/signout", signoutUser)

export default authRouter;