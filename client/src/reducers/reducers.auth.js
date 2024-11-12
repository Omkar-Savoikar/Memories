import { authActions } from "../constants/actionTypes.js";

const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case authActions.AUTH:
			localStorage.setItem(
				"memories_user",
				JSON.stringify({ ...action?.payload }),
			);
			return { ...state, authData: action?.payload };
		case authActions.LOGOUT:
			localStorage.removeItem("memories_user");
			return { ...state, authData: null };
		default:
			return state;
	}
};

export default authReducer;
