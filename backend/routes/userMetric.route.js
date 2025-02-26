import express from "express"
import { getUserMetrics, createUserMetrics, updateUserMetrics } from '../controllers/UserMetric.controller.js'


const userMetricRouter = express.Router()


userMetricRouter.get("/:email", getUserMetrics)

userMetricRouter.post("/create", createUserMetrics)

userMetricRouter.post("/update", updateUserMetrics)

export default userMetricRouter;