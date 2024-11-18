import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { getPosts } from "../actions/actions.posts.js";

import Form from "./Form.jsx";
import Posts from "./Posts.jsx";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function Home() {
	const [currentId, setCurrentId] = useState("");
	const dispatch = useDispatch();
	const query = useQuery();
	const navigate = useNavigate();

	const page = query.get("page") || 1;
	const search = query.get("searchQuery");

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
