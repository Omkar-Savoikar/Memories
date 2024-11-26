import PropTypes from "prop-types";

function Comment({ comment }) {
	return (
		<div>
			<strong>{comment.split(": ")[0]}</strong> : {comment.split(": ")[1]}
		</div>
	);
}

export default Comment;

Comment.propTypes = {
	comment: PropTypes.string.isRequired,
};
