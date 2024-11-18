import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";

import "./App.css";

import Auth from "./components/Auth.jsx";
import Filters from "./components/Filters.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import PostDetails from "./components/PostDetails.jsx";

function App() {
	const user = JSON.parse(localStorage.getItem("memories_user"))?.user;

	return (
		<Router>
			<div className="container">
				<Navbar />
				<Filters />
				<Routes>
					<Route
						path="/"
						exact
						Component={() => <Navigate to="/posts" />}
					/>
					<Route
						path="/posts"
						exact
						Component={Home}
					/>
					<Route
						path="/posts/search"
						exact
						Component={Home}
					/>
					<Route
						path="/posts/:id"
						exact
						Component={PostDetails}
					/>
					<Route
						path="/auth"
						exact
						Component={() =>
							!user ? <Auth /> : <Navigate to="/posts" />
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
