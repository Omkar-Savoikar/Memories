import axios from "axios";

const URI = "http://localhost:5000/api/v1/posts";

const fetchPosts = () => axios.get(URI);
const createPost = (newPost) => axios.post(URI, newPost);

export { createPost, fetchPosts };
