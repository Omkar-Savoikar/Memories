import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signIn, signUp } from "../actions/actions.auth.js";
import IMAGES from "../assets/images/index.js";

const initialUserData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

function Auth() {
	const [isSignUp, setIsSignUp] = useState(false);
	const [isPasswordVisible, setPasswordIsVisible] = useState(false);
	const [isCPasswordVisible, setCPasswordIsVisible] = useState(false);
	const [userData, setUserData] = useState(initialUserData);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userData);
		if (isSignUp) {
			if (userData.password !== userData.confirmPassword) {
				console.error("Passwords dont match");
				return;
			}
			dispatch(signUp(userData, navigate));
		} else {
			dispatch(signIn(userData, navigate));
		}
	};

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const updateIsPasswordVisble = () => {
		setPasswordIsVisible((prevIsVisible) => !prevIsVisible);
	};

	const updateIsCPasswordVisble = () => {
		setCPasswordIsVisible((prevIsVisible) => !prevIsVisible);
	};

	const switchMode = () => {
		setIsSignUp((prevIsSignUp) => !prevIsSignUp);
		setPasswordIsVisible(false);
		setCPasswordIsVisible(false);
		setUserData(initialUserData);
	};

	return (
		<div className="formContainer">
			<h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
			<form onSubmit={handleSubmit}>
				<div>
					{isSignUp && (
						<>
							<input
								name="firstName"
								type="text"
								placeholder="First Name"
								value={userData.firstName}
								onChange={handleChange}
								required
							/>
							<input
								name="lastName"
								type="text"
								placeholder="Last Name"
								value={userData.lastName}
								required
								onChange={handleChange}
							/>
						</>
					)}
					<input
						name="email"
						type="email"
						placeholder="Email"
						value={userData.email}
						required
						onChange={handleChange}
					/>
					<div className="passwordField">
						<input
							name="password"
							type={isPasswordVisible ? "text" : "password"}
							placeholder="Password"
							value={userData.password}
							required
							onChange={handleChange}
						/>
						<img
							src={
								isPasswordVisible
									? IMAGES.VISIBLE
									: IMAGES.HIDDEN
							}
							onClick={updateIsPasswordVisble}
							alt={isPasswordVisible ? "visible" : "hidden"}
							style={{ width: "1rem", aspectRatio: "1/1" }}
						/>
					</div>
					{isSignUp && (
						<div className="passwordField">
							<input
								name="confirmPassword"
								type={isCPasswordVisible ? "text" : "password"}
								placeholder="Confirm Password"
								value={userData.confirmPassword}
								required
								onChange={handleChange}
							/>
							<img
								src={
									isCPasswordVisible
										? IMAGES.VISIBLE
										: IMAGES.HIDDEN
								}
								onClick={updateIsCPasswordVisble}
								alt={isCPasswordVisible ? "visible" : "hidden"}
								style={{ width: "1rem", aspectRatio: "1/1" }}
							/>
						</div>
					)}
					<div className="buttons">
						<button
							type="submit"
							className="submitButton">
							{isSignUp ? "Sign Up" : "Log In"}
						</button>
					</div>
				</div>
			</form>
			<div className="grid">
				<p>
					{isSignUp
						? "Already have an account? "
						: "Don't have an account? "}
					<button
						className="authButton"
						onClick={switchMode}>
						{isSignUp ? "Log In " : "Sign Up"}
					</button>
				</p>
			</div>
		</div>
	);
}

export default Auth;
