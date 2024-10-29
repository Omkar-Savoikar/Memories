import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/actions.posts.js";

function Form({ currentId, setCurrentId }) {
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});
	const dispatch = useDispatch();
	const post = useSelector((state) =>
		currentId ? state.posts.find((post) => post._id === currentId) : null,
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentId) {
			dispatch(updatePost(currentId, postData));
		} else {
			dispatch(createPost(postData));
		}
		clear();
	};

	const clear = () => {
		setCurrentId(null);
		setPostData({
			creator: "",
			title: "",
			message: "",
			tags: "",
			selectedFile: "",
		});
	};

	useEffect(() => {
		if (post) {
			setPostData(post);
		}
	}, [post]);

	return (
		<form onSubmit={handleSubmit}>
			<p className="formTitle">
				{currentId ? "Editing" : "Creating"} a Memory
			</p>
			<input
				name="creator"
				label="Creator"
				placeholder="Creator"
				value={postData.creator}
				onChange={(e) =>
					setPostData({ ...postData, creator: e.target.value })
				}
			/>
			<input
				name="title"
				label="Title"
				placeholder="Title"
				value={postData.title}
				onChange={(e) =>
					setPostData({ ...postData, title: e.target.value })
				}
			/>
			<input
				name="message"
				label="Message"
				placeholder="Message"
				value={postData.message}
				onChange={(e) =>
					setPostData({ ...postData, message: e.target.value })
				}
			/>
			<input
				name="tags"
				label="Tags"
				placeholder="Tags"
				value={postData.tags}
				onChange={(e) =>
					setPostData({ ...postData, tags: e.target.value })
				}
			/>
			<div className="buttons">
				<button type="submit">{currentId ? "Update" : "Submit"}</button>
				<button onClick={clear}>Clear</button>
			</div>
		</form>
	);
}

Form.propTypes = {
	currentId: PropTypes.string,
	setCurrentId: PropTypes.func.isRequired,
};

export default Form;
