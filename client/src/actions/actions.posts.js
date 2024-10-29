import * as api from "../api/index.js";

const getPosts = () => async (dispatch) => {
	try {
		const response = await api.fetchPosts();
		dispatch({ type: "FETCH_ALL", payload: response.data });
	} catch (error) {
		console.log(error.message);
	}
};

const createPost = (newPost) => async (dispatch) => {
	try {
		const response = await api.createPost(newPost);
		dispatch({ type: "CREATE", payload: response.data });
	} catch (error) {
		console.log(error.message);
	}
};

const updatePost = (id, postData) => async (dispatch) => {
	try {
		const response = await api.updatePost(id, postData);
		dispatch({ type: "UPDATE", payload: response.data });
	} catch (error) {
		console.log(error);
	}
};

const deletePost = (id) => async (dispatch) => {
	try {
		await api.deltePost(id);
		dispatch({ type: "DELETE", payload: id });
	} catch (error) {
		console.log(error);
	}
};

export { createPost, deletePost, getPosts, updatePost };
