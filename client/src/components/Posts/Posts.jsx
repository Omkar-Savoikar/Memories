import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Post from "./Post/Post.jsx";

function Posts({ setCurrentId }) {
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
