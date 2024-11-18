import { postActions } from "../constants/actionTypes.js";

const updateSearch = (searchTerm) => async (dispatch) => {
	dispatch({ type: postActions.SEARCH, payload: { searchTerm } });
};

export { updateSearch };
