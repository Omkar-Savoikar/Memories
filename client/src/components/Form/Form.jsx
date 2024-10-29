import { useState } from "react";
import { useDispatch } from "react-redux";

import { createPost } from "../../actions/actions.posts.js";

function Form() {
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createPost(postData));
		clear();
	};

	const clear = () => {
		setPostData({
			creator: "",
			title: "",
			message: "",
			tags: "",
			selectedFile: "",
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<p className="formTitle">Create a Memory</p>
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
				<button type="submit">Submit</button>
				<button onClick={clear}>Clear</button>
			</div>
		</form>
	);
}

export default Form;
