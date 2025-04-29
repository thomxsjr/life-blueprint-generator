import express from "express"
import { lifeBlueprintGenerate } from '../controllers/mlModels.controller.js'


const mlModelsRouter = express.Router()

mlModelsRouter.post("/life-blueprint-generate", lifeBlueprintGenerate)

export default mlModelsRouter;