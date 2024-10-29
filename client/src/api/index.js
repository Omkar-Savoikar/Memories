import axios from "axios";

const URI = "http://localhost:5000/api/v1/posts";

const fetchPosts = () => axios.get(URI);
const createPost = (newPost) => axios.post(URI, newPost);
const updatePost = (id, postData) => axios.put(`${URI}/${id}`, postData);
const deltePost = (id) => axios.delete(`${URI}/${id}`);

export { createPost, deltePost, fetchPosts, updatePost };
