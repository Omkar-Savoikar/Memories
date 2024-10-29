import express from "express";

import {
	createPost,
	deletePost,
	getPosts,
	updatePost,
} from "../controllers/controller.posts.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.post("/", createPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;
