import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/actions.posts.js";
import IMAGES from "./assets/images/index.js";
import Form from "./components/Form/Form.jsx";
import Posts from "./components/Posts/Posts.jsx";

import "./App.css";

function App() {
	const [currentId, setCurrentId] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	return (
		<div className="container">
			<div className="appbar">
				<h1 className="heading">
					Memories
					<img
						className="mainImage"
						src={IMAGES.MEMORY}
						alt="memories"
					/>
				</h1>
			</div>
			<div className="filters">
				<p>Sort By</p>
				<p>Search</p>
				<button>+</button>
			</div>
			<div className="growContainer">
				<Posts setCurrentId={setCurrentId} />
				<Form
					currentId={currentId}
					setCurrentId={setCurrentId}
				/>
			</div>
		</div>
	);
}

export default App;
