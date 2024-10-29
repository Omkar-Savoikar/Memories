import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import router from "./src/routes/routes.index.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/", (req, res, next) => {
	console.log(`${req.method} request for ${req.url}`);
	next();
});

app.use("/api/v1", router);

const CONNECTION_URL = "mongodb://localhost:27017/memories";
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL)
	.then(() =>
		app.listen(PORT, () =>
			console.log(`Server Running on Port: http://localhost:${PORT}`),
		),
	)
	.catch((error) => console.error(error.message));
