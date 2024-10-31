import axios from "axios";

const URI = "http://localhost:5000";
const URL = `${URI}/api/v1/posts`;

const fetchPosts = () => axios.get(URL);
const createPost = (newPost) => axios.post(URL, newPost);
const updatePost = (id, postData) => axios.put(`${URL}/${id}`, postData);
const deltePost = (id) => axios.delete(`${URL}/${id}`);
const likePost = (id) => axios.patch(`${URL}/${id}`);

export { createPost, deltePost, fetchPosts, likePost, updatePost };
