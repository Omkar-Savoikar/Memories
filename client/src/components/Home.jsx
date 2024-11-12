import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "../actions/actions.posts.js";

import Form from "./Form.jsx";
import Posts from "./Posts.jsx";

function Home() {
	const [currentId, setCurrentId] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	return (
		<div className="growContainer">
			<Posts setCurrentId={setCurrentId} />
			<Form
				currentId={currentId}
				setCurrentId={setCurrentId}
			/>
		</div>
	);
}

export default Home;
