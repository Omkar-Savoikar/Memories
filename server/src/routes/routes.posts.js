import express from "express";

import {
	createPost,
	deletePost,
	getPosts,
	likePost,
	updatePost,
} from "../controllers/controller.posts.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.post("/", createPost);
postRouter.patch("/:id", likePost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;
