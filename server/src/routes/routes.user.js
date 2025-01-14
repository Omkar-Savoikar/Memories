import express from "express";

import { signIn, signUp } from "../controllers/controller.users.js";

const userRouter = express.Router();

userRouter.post("/signIn", signIn);
userRouter.post("/signUp", signUp);

export default userRouter;
