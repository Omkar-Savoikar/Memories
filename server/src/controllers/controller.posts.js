import mongoose from "mongoose";
import Post from "../models/models.posts.js";

export const getPosts = async (req, res) => {
	try {
		const postMessages = await Post.find();
		console.log(postMessages);
		res.status(200).json(postMessages);
	} catch (error) {
		console.error(error);
		res.status(404).json({ message: error.message });
	}
};

export const createPost = async (req, res) => {
	const postData = req.body;
	const newPost = new Post(postData);
	try {
		await newPost.save();
		console.log(newPost);
		res.status(201).json(newPost);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: error.message });
	}
};

export const updatePost = async (req, res) => {
	const { id: _id } = req.params;
	const post = req.body;
	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).json({ message: "Invalid post id" });
	try {
		const updatedPost = await Post.findByIdAndUpdate(_id, post, {
			new: true,
		});
		console.log(updatedPost);
		return res.status(201).json({ updatedPost });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};
