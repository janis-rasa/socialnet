import React, { useState, useEffect } from "react";
import PostList from "../PostList/PostList";
import Profile from "../Profile/Profile";
import Home from "../Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import classes from "./Main.module.scss";

const Main = () => {
	const location = useLocation();
	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionStage, setTransitionStage] = useState(classes.fadeIn);

	useEffect(() => {
		if (location !== displayLocation) setTransitionStage(classes.fadeOut);
	}, [location, displayLocation]);

	return (
		<div
			className={transitionStage}
			onAnimationEnd={() => {
				if (transitionStage === classes.fadeOut) {
					setTransitionStage(classes.fadeIn);
					setDisplayLocation(location);
				}
			}}
		>
			<div className="container py-3">
				<Routes location={displayLocation}>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/posts" element={<PostList />} />
				</Routes>
			</div>
		</div>
	);
};

export default Main;
