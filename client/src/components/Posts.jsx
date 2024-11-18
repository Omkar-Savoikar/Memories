import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Post from "./Post.jsx";

function Posts({ setCurrentId }) {
	const posts = useSelector((state) => state.posts);
	const searchTerm = useSelector((state) => state.searchTerm);

	const searchedPosts = searchTerm
		? posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
		: posts;

	return !searchedPosts.length ? (
		<div>No posts found</div>
	) : (
		<div className="gridContainer">
			{searchedPosts.map((post) => (
				<Post
					key={post._id}
					post={post}
					setCurrentId={setCurrentId}
				/>
			))}
		</div>
	);
}

Posts.propTypes = {
	setCurrentId: PropTypes.func.isRequired,
};

export default Posts;
