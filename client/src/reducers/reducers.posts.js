import { loadingActions, postActions } from "../constants/actionTypes.js";

const postRreducer = (state = { isLoading: true, posts: [] }, action) => {
	//posts is the state
	switch (action.type) {
		case postActions.FETCH_ALL:
			return { ...state, posts: action.payload };
		case postActions.CREATE:
			return { ...state, posts: [...state.posts, action.payload] };
		case postActions.UPDATE:
		case postActions.LIKE:
			return {
				...state,
				posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
			};
		case postActions.DELETE:
			return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
		case postActions.SORT: {
			const sortedPosts = [...state.posts];
			if (action.payload === "title") {
				return {
					...state,
					posts: sortedPosts.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())),
				};
			} else if (action.payload === "oldest") {
				return { ...state, posts: sortedPosts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) };
			} else if (action.payload === "latest") {
				return { ...state, posts: sortedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) };
			} else {
				return {
					...state,
					posts: sortedPosts.sort((a, b) => b.creator.toLowerCase().localeCompare(a.creator.toLowerCase())),
				};
			}
		}
		case loadingActions.START: {
			return { ...state, isLoading: true };
		}
		case loadingActions.STOP: {
			return { ...state, isLoading: false };
		}
		default:
			return state;
	}
};

export default postRreducer;
