import mongoose from "mongoose";

const postSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		creator: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		tags: [String],
		likes: {
			type: [String],
			default: [],
		},
	},
	{ timestamps: true },
);

const Post = mongoose.model("Post", postSchema);

export default Post;
