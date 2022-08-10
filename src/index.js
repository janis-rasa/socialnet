import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = () => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={store.getState()} dispatch={store.dispatch.bind(store)} />
			</BrowserRouter>
		</React.StrictMode>
	);
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);
