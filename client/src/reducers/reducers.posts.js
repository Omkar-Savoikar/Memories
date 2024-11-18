import { postActions } from "../constants/actionTypes.js";

const postRreducer = (posts = [], action) => {
	//posts is the state
	switch (action.type) {
		case postActions.FETCH_ALL:
			return action.payload;
		case postActions.CREATE:
			return [...posts, action.payload];
		case postActions.UPDATE:
		case postActions.LIKE:
			return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
		case postActions.DELETE:
			return posts.filter((post) => post._id !== action.payload);
		case postActions.SORT: {
			const sortedPosts = [...posts];
			if (action.payload === "title") {
				return sortedPosts.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
			} else if (action.payload === "oldest") {
				return sortedPosts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
			} else if (action.payload === "latest") {
				return sortedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
			} else {
				return sortedPosts.sort((a, b) => b.creator.toLowerCase().localeCompare(a.creator.toLowerCase()));
			}
		}
		default:
			return posts;
	}
};

export default postRreducer;
