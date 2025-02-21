import express from 'express';
import dotenv from 'dotenv';
import path from "path";

import authRoutes from "./routes/auth.route.js";

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();

app.use(express.json());

app.use("/auth", authRoutes);



app.listen(5000, () => {
    connectDB();
    console.log('Server is running on http://localhost:'+PORT);
});

