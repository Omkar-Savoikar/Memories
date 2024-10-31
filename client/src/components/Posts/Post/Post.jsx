import moment from "moment";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/actions.posts.js";
import IMAGES from "../../../assets/images/index.js";

function Post({ post, setCurrentId }) {
	const dispatch = useDispatch();

	return (
		<div className="card">
			<div className="cardTitle">{post.title}</div>
			<button
				className="cardOptions"
				onClick={() => setCurrentId(post._id)}>
				...
			</button>
			<div className="message">{post.message}</div>
			<div className="creator">- {post.creator}</div>
			<div className="cardTime">{moment(post.createdAt).fromNow()}</div>
			<div className="cardTags">{post.tags.map((tag) => `#${tag} `)}</div>
			<div className="cardFooter">
				<button
					style={{ color: "blue" }}
					onClick={() => dispatch(likePost(post._id))}>
					<img
						src={IMAGES.LIKE}
						alt="like"
						width={"20px"}
						height={"20px"}
					/>
					&nbsp;
					{post.likeCount}
				</button>
				<button
					style={{ color: "red" }}
					onClick={() => dispatch(deletePost(post._id))}>
					<img
						src={IMAGES.DELETE}
						alt="like"
						width={"20px"}
						height={"20px"}
					/>
					Delete
				</button>
			</div>
		</div>
	);
}

Post.propTypes = {
	post: PropTypes.object.isRequired,
	setCurrentId: PropTypes.any.isRequired,
};

export default Post;
