import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../actions/actions.filters";

function SearchBar() {
	const searchTerm = useSelector((state) => state.searchTerm);
	const dispatch = useDispatch();
	return (
		<label>
			Search:
			<input
				type="text"
				name="search"
				style={{
					margin: "0px 5px",
					background: "black",
					color: "white",
				}}
				value={searchTerm}
				onChange={(e) => dispatch(updateSearch(e.target.value))}
			/>
		</label>
	);
}

export default SearchBar;
