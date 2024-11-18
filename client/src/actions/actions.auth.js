import * as api from "../api/index.js";
import { authActions } from "../constants/actionTypes.js";

const signIn = (userData, navigate) => async (dispatch) => {
	try {
		const {
			data: { user, token },
		} = await api.signIn(userData);
		dispatch({ type: authActions.AUTH, payload: { user, token } });
		navigate("/");
	} catch (error) {
		console.error(error);
	}
};

const signUp = (userData, navigate) => async (dispatch) => {
	try {
		const {
			data: { user, token },
		} = await api.signUp(userData);
		dispatch({ type: authActions.AUTH, payload: { user, token } });
		navigate("/");
	} catch (error) {
		console.error(error);
	}
};

export { signIn, signUp };
