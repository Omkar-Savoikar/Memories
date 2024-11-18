import { postActions } from "../constants/actionTypes.js";

const searchRreducer = (searchterm = "", action) => {
	//searchTerm is the state
	switch (action.type) {
		case postActions.SEARCH:
			return action.payload.searchTerm;
		default:
			return searchterm;
	}
};

export default searchRreducer;
