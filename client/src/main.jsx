import { configureStore } from "@reduxjs/toolkit";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import App from "./App.jsx";
import "./index.css";
import reducers from "./reducers/index.js";

const store = configureStore({
	reducer: { ...reducers },
	middleware: () => [thunk],
});

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
