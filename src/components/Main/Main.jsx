import React, { useState, useEffect } from "react";
import PostList from "../PostList/PostList";
import Profile from "../Profile/Profile";
import Messages from "../Messages/Messages";
import Home from "../Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import styles from "./Main.module.scss";
import { Container } from "react-bootstrap";
import NoMatch from "../NoMatch/NoMatch";

const Main = (props) => {
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
				<Container className="py-3">
					<Routes location={displayLocation}>
						<Route path="/" element={<Home homePage={props.homePage} />} />
						<Route
							path="/profile"
							element={<Profile profile={props.profile} />}
						/>
						<Route
							path="/posts"
							element={
								<PostList
									postsPage={props.postsPage}
									dispatch={props.dispatch}
								/>
							}
						/>
						<Route
							path="/messages/*"
							element={
								<Messages
									users={props.users}
									messagesPage={props.messagesPage}
									dispatch={props.dispatch}
									profile={props.profile}
								/>
							}
						/>
						<Route path="*" element={<NoMatch />} />
					</Routes>
				</Container>
			</div>
		</main>
	);
};

export default Main;
