import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import router from "./src/routes/routes.index.js";

dotenv.config();
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/", (req, res, next) => {
	console.log(`${req.method} request for ${req.url}`);
	next();
});

app.use("/api/v1", router);

app.get("/", (req, res) => {
	res.send("Welcome to the Server");
});

mongoose
	.connect(CONNECTION_URL)
	.then(() => {
		console.log("Database Connected");
		app.listen(PORT, () =>
			console.log(`Server Running on Port: http://localhost:${PORT}`),
		);
	})
	.catch((error) => console.error(error.message));
