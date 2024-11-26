import * as api from "../api/index.js";
import { loadingActions, postActions } from "../constants/actionTypes.js";

const getPost = (id) => async (dispatch) => {
	dispatch({ type: loadingActions.START });
	try {
		const response = await api.fetchPost(id);
		console.log(response);
		dispatch({ type: postActions.FETCH_POST, payload: response.data });
	} catch (error) {
		console.error(error.message);
	}
	dispatch({ type: loadingActions.STOP });
};

const getPosts = () => async (dispatch) => {
	dispatch({ type: loadingActions.START });
	try {
		const response = await api.fetchPosts();
		dispatch({ type: postActions.FETCH_ALL, payload: response.data });
	} catch (error) {
		console.error(error.message);
	}
	dispatch({ type: loadingActions.STOP });
};

const createPost = (newPost) => async (dispatch) => {
	try {
		const response = await api.createPost(newPost);
		dispatch({ type: postActions.CREATE, payload: response.data });
	} catch (error) {
		console.error(error.message);
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
		console.error(error);
	}
};

const deletePost = (id) => async (dispatch) => {
	try {
		await api.deltePost(id);
		dispatch({ type: postActions.DELETE, payload: id });
	} catch (error) {
		console.error(error);
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
		console.error(error);
	}
};

const sortPosts = (sortValue) => (dispatch) => {
	dispatch({ type: loadingActions.START });
	dispatch({
		type: postActions.SORT,
		payload: sortValue,
	});
	dispatch({ type: loadingActions.STOP });
};

const commentPost = (comment, postId) => async (dispatch) => {
	try {
		const response = await api.commentPost(comment, postId);
		console.log(response);
		dispatch({
			type: postActions.COMMENT,
			payload: response.data.updatedPost,
		});
		return response.data.updatedPost.comments;
	} catch (error) {
		console.error(error);
	}
};

export { commentPost, createPost, deletePost, getPost, getPosts, likePost, sortPosts, updatePost };
