import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import cors from 'cors';
import path from "path";
import connectMongoDBSession from "connect-mongodb-session";

import authRouter from "./routes/auth.route.js";
import userMetricsRouter from "./routes/userMetric.route.js"
import mlModelsRouter from "./routes/mlModels.route.js"

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
const MongoDBSession = connectMongoDBSession(session);
const MongoDBStore = MongoDBSession({
	uri: process.env.MONGO_URI,
	collection: "sessions"
});
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	store: MongoDBStore,
	cookie:{
		maxAge: 1000 * 60 * 60 * 24 * 2
	}
}));

app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
  }));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user-metrics", userMetricsRouter)
app.use("/api/ml", mlModelsRouter)


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

