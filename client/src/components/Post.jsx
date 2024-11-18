import moment from "moment";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../actions/actions.posts.js";
import IMAGES from "../assets/images/index.js";

function Post({ post, setCurrentId }) {
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem("memories_user"))?.user;

	return (
		<div className="card">
			<div
				className="cardImage"
				// to apply gradient on the image - looks good
				// style={{background: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url(${post.image})`}}
				style={{ backgroundImage: `url(${post.image})` }}></div>
			{user?._id === post.creator && (
				<button
					className="cardOptions"
					onClick={() => setCurrentId(post._id)}>
					...
				</button>
			)}
			<div className="title">{post.title}</div>
			<div className="message">{post.message}</div>
			<div className="creator">- {post.username}</div>
			<div className="cardTime">{moment(post.createdAt).fromNow()}</div>
			<div className="cardTags">{post.tags.map((tag) => `#${tag} `)}</div>
			<div className="cardFooter">
				<button
					style={{ color: "blue" }}
					disabled={!user}
					onClick={() => dispatch(likePost(post._id))}>
					<img
						src={post.likes.find((like) => like === user?._id) ? IMAGES.LIKE : IMAGES.LIKED}
						alt="like"
						width={"20px"}
						height={"20px"}
					/>
					&nbsp;
					{!user && `${post.likes.length} Likes`}
					{post.likes.find((like) => like === user?._id)
						? `You and ${post.likes.length - 1} Likes`
						: `${post.likes.length} Likes`}
				</button>
				{user?._id === post.creator && (
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
				)}
			</div>
		</div>
	);
}

Post.propTypes = {
	post: PropTypes.object.isRequired,
	setCurrentId: PropTypes.any.isRequired,
};

export default Post;
