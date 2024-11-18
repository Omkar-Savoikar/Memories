import { useDispatch } from "react-redux";
import { sortPosts } from "../actions/actions.posts";

function SortFilter() {
	const dispatch = useDispatch();

	return (
		<label onChange={(e) => dispatch(sortPosts(e.target.value))}>
			Sort By:
			<select
				name="sort"
				style={{
					margin: "0px 5px",
					background: "black",
					color: "white",
				}}>
				<option value="oldest">Oldest</option>
				<option value="latest">Latest</option>
				<option value="title">Title</option>
				<option value="creator">Author</option>
			</select>
		</label>
	);
}

export default SortFilter;
