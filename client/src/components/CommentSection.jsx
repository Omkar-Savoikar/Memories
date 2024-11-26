import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Comment from "./Comment";

import { commentPost } from "../actions/actions.posts";

function CommentSection({ post }) {
	const [comments, setComments] = useState(post?.comments);
	const [comment, setComment] = useState("");

	const commentsRef = useRef();

	const dispatch = useDispatch();

	const user = JSON.parse(localStorage.getItem("memories_user"))?.user;

	const submitComment = async () => {
		const finalComment = `${user.name}: ${comment}`;
		const newComments = await dispatch(commentPost(finalComment, post._id));
		setComments(newComments);
		setComment("");
		commentsRef.current.scrollIntoView({ behaviour: "smooth" });
	};

	return (
		<div className="comments">
			<div className="commentsContainer">
				<h6>Comments</h6>
				{comments.map((comment, i) => (
					<Comment
						key={i}
						comment={comment}
					/>
				))}
				<div ref={commentsRef} />
			</div>
			{user && (
				<div style={{ width: "50%" }}>
					<h6>Write a comment</h6>
					<textarea
						rows={4}
						style={{ width: "100%" }}
						label="Comment"
						placeholder="Comment"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<button
						type="submit"
						disabled={!comment}
						onClick={submitComment}>
						Comment
					</button>
				</div>
			)}
		</div>
	);
}

export default CommentSection;

CommentSection.propTypes = {
	post: PropTypes.object.isRequired,
};
