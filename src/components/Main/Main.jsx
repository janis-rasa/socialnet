import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styles from "./Main.module.scss";
import { Container } from "react-bootstrap";
import PostsContainer from "../Posts/PostsContainer";
import NoMatch from "../NoMatch/NoMatch";
import MessagesContainer from "../Messages/MessagesContainer";
import HomeContainer from "../Home/HomeContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import UsersContainer from "../Users/UsersContainer";

const Main = () => {
	const location = useLocation();
	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionStage, setTransitionStage] = useState(styles.fadeIn);

	useEffect(() => {
		const pathPattern = /^\/[^/]+\/.+$/g;
		if (location !== displayLocation && !pathPattern.test(location.pathname))
			setTransitionStage(styles.fadeOut);
	}, [location, displayLocation]);

	return (
		<main className={styles.wrapper}>
			<div
				className={transitionStage}
				onAnimationEnd={() => {
					if (transitionStage === styles.fadeOut) {
						setTransitionStage(styles.fadeIn);
						setDisplayLocation(location);
					}
				}}
			>
				<Container className="py-5">
					<Routes location={displayLocation}>
						<Route path="/" element={<HomeContainer />} />
						<Route path="/profile" element={<ProfileContainer />} />
						<Route path="/posts" element={<PostsContainer />} />
						<Route path="/messages/*" element={<MessagesContainer />} />
						<Route path="/users/*" element={<UsersContainer />} />
						<Route path="*" element={<NoMatch />} />
					</Routes>
				</Container>
			</div>
		</main>
	);
};

export default Main;
