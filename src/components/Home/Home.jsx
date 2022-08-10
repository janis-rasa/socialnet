import React from "react";

const Home = (props) => {
	return (
		<div>
			<h1>{props.homePage.title}</h1>
			<p>{props.homePage.text}</p>
		</div>
	);
};

export default Home;
