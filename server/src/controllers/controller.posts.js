import { Post } from "../models/models.posts.js";

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
		res.status(201).json(newPost);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: error.message });
	}
};
