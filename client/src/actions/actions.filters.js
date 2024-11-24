import { loadingActions, postActions } from "../constants/actionTypes.js";

const updateSearch = (searchTerm) => async (dispatch) => {
	dispatch({ type: loadingActions.START });
	dispatch({ type: postActions.SEARCH, payload: { searchTerm } });
	dispatch({ type: loadingActions.STOP });
};

export { updateSearch };
