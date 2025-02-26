import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import path from "path";
import connectMongoDBSession from "connect-mongodb-session";

import authRouter from "./routes/auth.route.js";
import userMetricRouter from "./routes/userMetric.route.js"

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
}));


app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user-metrics", userMetricRouter)


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

