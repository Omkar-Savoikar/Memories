import { authActions } from "../constants/actionTypes.js";

const authReducer = (user = { authData: null }, action) => {
	switch (action.type) {
		case authActions.AUTH:
			localStorage.setItem("memories_user", JSON.stringify({ ...action?.payload }));
			return { ...user, authData: action?.payload };
		case authActions.LOGOUT:
			localStorage.removeItem("memories_user");
			return { ...user, authData: null };
		default:
			return user;
	}
};

export default authReducer;
