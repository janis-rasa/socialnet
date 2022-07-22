import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import state, { addPost, subscribe, updatePost } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = () => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} addPost={addPost} updatePost={updatePost} />
			</BrowserRouter>
		</React.StrictMode>
	);
};

rerenderEntireTree();

subscribe(rerenderEntireTree);
