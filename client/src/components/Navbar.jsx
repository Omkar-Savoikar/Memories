import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import IMAGES from "../assets/images/index.js";

function Navbar() {
	// const user = null;
	const userData = JSON.parse(localStorage.getItem("memories_user"));
	const [user, setUser] = useState(userData?.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const token = userData?.token;
		if (token) {
			const decodedoken = jwtDecode(token);
			if (decodedoken.exp * 1000 < new Date().getTime()) {
				logOut();
			}
		}
		setUser(userData?.user);
	}, [location]);

	const logOut = () => {
		dispatch({ type: "LOGOUT" });
		navigate("/");
		setUser(null);
	};

	return (
		<div className="appbar">
			<Link
				to="/"
				style={{ textDecoration: "none" }}>
				<h1 className="heading">
					Memories
					<img
						className="mainImage"
						src={IMAGES.MEMORY}
						alt="memories"
					/>
				</h1>
			</Link>
			<div className="toolbar">
				{user ? (
					<div className="profile">
						<div className="avatar">{user?.name.charAt(0)}</div>
						<button
							className="logout"
							onClick={logOut}>
							Log Out
						</button>
					</div>
				) : (
					<Link
						to="/auth"
						className="auth">
						Log In
					</Link>
				)}
			</div>
		</div>
	);
}

export default Navbar;
