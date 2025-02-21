import express from "express"
import { getUser } from "../controllers/auth.controller.js"
import { signinUser } from "../controllers/auth.controller.js"
import { signupUser } from "../controllers/auth.controller.js"
import { signoutUser } from "../controllers/auth.controller.js"

const authRouter = express.Router()


authRouter.get("/:id", getUser)

authRouter.post("/signin", signinUser)

authRouter.post("/signup", signupUser)

authRouter.get("/signout", signoutUser)

export default authRouter;