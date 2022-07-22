import React, { useState, useEffect } from "react";
import PostList from "../PostList/PostList";
import Profile from "../Profile/Profile";
import MessagesList from "../MessagesList/MessagesList";
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
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<Profile />} />
						<Route
							path="/posts"
							element={
								<PostList
									posts={props.posts}
									addPost={props.addPost}
									newPost={props.newPost}
									updatePost={props.updatePost}
								/>
							}
						/>
						<Route
							path="/messages/*"
							element={
								<MessagesList users={props.users} messages={props.messages} />
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
