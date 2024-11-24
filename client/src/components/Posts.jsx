import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Post from "./Post.jsx";

function Posts({ setCurrentId }) {
	const { posts, isLoading } = useSelector((state) => state.posts);
	const searchTerm = useSelector((state) => state.searchTerm);

	const searchedPosts = searchTerm
		? posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
		: posts;

	if (!searchedPosts.length && !isLoading) {
		return <div>No posts found</div>;
	}
	return isLoading ? (
		<div>Loading</div>
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
