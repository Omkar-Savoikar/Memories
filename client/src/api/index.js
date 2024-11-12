import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });
API.interceptors.request.use((req) => {
	const userData = localStorage.getItem("memories_user");
	if (userData) {
		req.headers.Authorization = `Bearer ${JSON.parse(userData).token}`;
	}
	return req;
});

const POSTS_URL = `/api/v1/posts`;
const USERS_URL = `/api/v1/user`;

const fetchPosts = () => API.get(POSTS_URL);
const createPost = (newPost) => API.post(POSTS_URL, newPost);
const updatePost = (id, postData) => API.put(`${POSTS_URL}/${id}`, postData);
const deltePost = (id) => API.delete(`${POSTS_URL}/${id}`);
const likePost = (id) => API.patch(`${POSTS_URL}/${id}`);

const signIn = (userData) => API.post(`${USERS_URL}/signIn`, userData);
const signUp = (userData) => API.post(`${USERS_URL}/signUp`, userData);

export {
	createPost,
	deltePost,
	fetchPosts,
	likePost,
	signIn,
	signUp,
	updatePost,
};
