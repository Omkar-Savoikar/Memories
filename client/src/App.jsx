import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

import Auth from "./components/Auth.jsx";
import Filters from "./components/Filters.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
	return (
		<Router>
			<div className="container">
				<Navbar />
				<Filters />
				<Routes>
					<Route
						path="/"
						exact
						Component={Home}
					/>
					<Route
						path="/auth"
						exact
						Component={Auth}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
