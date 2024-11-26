import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPost } from "../actions/actions.posts";
import CommentSection from "./CommentSection";

function PostDetails() {
	const { post, isLoading } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getPost(id));
	}, [id]);

	if (!post) return null;

	if (isLoading) {
		return (
			<div className="paper">
				<div>Loading</div>
			</div>
		);
	}

	return (
		<div className="detailedCard">
			<div className="detailedSection">
				<h2>{post.title}</h2>
				<h6>{post.tags.map((tag) => `#${tag} `)}</h6>
				<div>{post.message}</div>
				<div>Created By: {post.username}</div>
				<p>{moment(post.createdAt).fromNow()}</p>
				<CommentSection post={post} />
			</div>
			<div className="imageSection">
				<img
					className="media"
					src={post.image}
					draggable="false"
				/>
			</div>
		</div>
	);
}

export default PostDetails;
