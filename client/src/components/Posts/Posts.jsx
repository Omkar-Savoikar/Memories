import { useSelector } from "react-redux";

import Post from "./Post/Post.jsx";

function Posts() {
	const posts = useSelector((state) => state.posts);
	console.log(posts);
	return !posts.length ? (
		<div>Loading...</div>
	) : (
		<div className="gridContainer">
			{posts.map((post) => (
				<Post
					key={post._id}
					post={post}
				/>
			))}
		</div>
	);
}

export default Posts;
