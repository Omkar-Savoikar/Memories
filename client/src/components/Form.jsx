import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../actions/actions.posts.js";

const initalFormData = {
	title: "",
	message: "",
	tags: "",
	image: "",
};
function Form({ currentId, setCurrentId }) {
	const [postData, setPostData] = useState(initalFormData);
	const dispatch = useDispatch();
	const post = useSelector((state) => (currentId ? state.posts.find((post) => post._id === currentId) : null));
	const user = JSON.parse(localStorage.getItem("memories_user"));

	const convertImageToBase64 = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			setPostData({
				...postData,
				image: reader.result,
			});
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentId) {
			dispatch(
				updatePost(currentId, {
					...postData,
					username: user?.user.name,
				}),
			);
		} else {
			if (!postData.image) {
				console.error("No file selected");
				return;
			}
			dispatch(createPost({ ...postData, username: user?.user.name }));
		}
		clear(e);
	};

	const clear = (e) => {
		e.preventDefault();
		setCurrentId("");
		setPostData(initalFormData);
		document.getElementsByName("file")[0].value = "";
	};

	useEffect(() => {
		if (post) {
			setPostData(post);
		}
	}, [post]);

	if (!user) {
		return (
			<div className="paper">
				<h6>Please Sign In to create your memories and like others memories</h6>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<p className="formTitle">{currentId ? "Editing" : "Creating"} a Memory</p>
			<input
				name="title"
				label="Title"
				placeholder="Title"
				value={postData.title}
				required
				onChange={(e) => setPostData({ ...postData, title: e.target.value })}
			/>
			<input
				name="message"
				label="Message"
				placeholder="Message"
				value={postData.message}
				required
				onChange={(e) => setPostData({ ...postData, message: e.target.value })}
			/>
			<input
				name="tags"
				label="Tags"
				placeholder="Tags"
				value={postData.tags}
				onChange={(e) =>
					setPostData({
						...postData,
						tags: e.target.value.split(","),
					})
				}
			/>
			<input
				name="file"
				label="File"
				type="file"
				accept="image/*"
				required
				onChange={(e) => convertImageToBase64(e)}
			/>
			<div className="buttons">
				<button type="submit">{currentId ? "Update" : "Submit"}</button>
				<button onClick={clear}>Clear</button>
			</div>
		</form>
	);
}

Form.propTypes = {
	currentId: PropTypes.string.isRequired,
	setCurrentId: PropTypes.func.isRequired,
};

export default Form;
