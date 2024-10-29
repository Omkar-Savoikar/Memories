import moment from "moment";
import PropTypes from "prop-types";

import IMAGES from "../../../assets/images/index.js";

function Post({ post }) {
	return (
		<div className="card">
			<div className="cardTitle">{post.title}</div>
			<button className="cardOptions">...</button>
			<div className="message">{post.message}</div>
			<div className="creator">- {post.creator}</div>
			<div className="cardTime">{moment(post.createdAt).fromNow()}</div>
			<div className="cardTags">{post.tags.map((tag) => `#${tag} `)}</div>
			<div className="cardFooter">
				<button
					style={{ color: "blue" }}
					onClick={() => {}}>
					<img
						src={IMAGES.LIKE}
						alt="like"
						width={"20px"}
						height={"20px"}
					/>
					{post.likeCount}
				</button>
				<button style={{ color: "red" }}>
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
};

export default Post;
