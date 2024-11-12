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
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post,
			);
		case postActions.DELETE:
			return posts.filter((post) => post._id !== action.payload);
		default:
			return posts;
	}
};

export default postRreducer;
