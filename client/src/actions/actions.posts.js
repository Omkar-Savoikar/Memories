import * as api from "../api/index.js";
import { postActions } from "../constants/actionTypes.js";

const getPosts = () => async (dispatch) => {
	try {
		const response = await api.fetchPosts();
		dispatch({ type: postActions.FETCH_ALL, payload: response.data });
	} catch (error) {
		console.log(error.message);
	}
};

const createPost = (newPost) => async (dispatch) => {
	try {
		const response = await api.createPost(newPost);
		dispatch({ type: postActions.CREATE, payload: response.data });
	} catch (error) {
		console.log(error.message);
	}
};

const updatePost = (id, postData) => async (dispatch) => {
	try {
		const response = await api.updatePost(id, postData);
		dispatch({
			type: postActions.UPDATE,
			payload: response.data.updatedPost,
		});
	} catch (error) {
		console.log(error);
	}
};

const deletePost = (id) => async (dispatch) => {
	try {
		await api.deltePost(id);
		dispatch({ type: postActions.DELETE, payload: id });
	} catch (error) {
		console.log(error);
	}
};

const likePost = (id) => async (dispatch) => {
	try {
		const response = await api.likePost(id);
		dispatch({
			type: postActions.LIKE,
			payload: response.data.updatedPost,
		});
	} catch (error) {
		console.log(error);
	}
};

export { createPost, deletePost, getPosts, likePost, updatePost };
