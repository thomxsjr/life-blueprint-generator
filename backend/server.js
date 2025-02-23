import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import path from "path";

import authRoutes from "./routes/auth.route.js";

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));

app.use(express.json());

app.use("/api/auth", authRoutes);


if(process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on http://localhost:'+PORT);
});

