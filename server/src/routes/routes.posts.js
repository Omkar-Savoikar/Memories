import express from "express";

import {
	createPost,
	deletePost,
	getPosts,
	likePost,
	updatePost,
} from "../controllers/controller.posts.js";
import auth from "../middlewares/middleware.auth.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.post("/", auth, createPost);
postRouter.patch("/:id", auth, likePost);
postRouter.put("/:id", auth, updatePost);
postRouter.delete("/:id", auth, deletePost);

export default postRouter;
