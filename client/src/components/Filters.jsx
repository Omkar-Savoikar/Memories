import SearchBar from "./SearchBar";
import SortFilter from "./SortFilter";

function Filters() {
	return (
		<div className="filters">
			<SortFilter className="sortFilter" />
			<SearchBar className="searchBar" />
			<button>+</button>
		</div>
	);
}

export default Filters;
