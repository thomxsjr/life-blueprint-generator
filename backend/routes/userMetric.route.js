import express from "express"
import { getUserMetrics, createUserMetrics, updateUserMetrics } from '../controllers/UserMetrics.controller.js'


const userMetricsRouter = express.Router()


userMetricsRouter.get("/:email", getUserMetrics)

userMetricsRouter.post("/create", createUserMetrics)

userMetricsRouter.put("/update", updateUserMetrics)

export default userMetricsRouter;