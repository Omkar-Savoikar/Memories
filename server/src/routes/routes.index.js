import express from "express";

import postRouter from "./routes.posts.js";
import userRouter from "./routes.user.js";

const router = express.Router();

router.use("/posts", postRouter);
router.use("/user", userRouter);

export default router;
