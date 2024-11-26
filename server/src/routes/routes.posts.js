import express from "express";

import {
	commentPost,
	createPost,
	deletePost,
	getPost,
	getPosts,
	likePost,
	updatePost,
} from "../controllers/controller.posts.js";
import auth from "../middlewares/middleware.auth.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/:id", getPost);
postRouter.post("/", auth, createPost);
postRouter.patch("/:id", auth, likePost);
postRouter.patch("/:id/comment", auth, commentPost);
postRouter.put("/:id", auth, updatePost);
postRouter.delete("/:id", auth, deletePost);

export default postRouter;
