import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = (props) => {
	localStorage.setItem("currentUserId", props.state.profile.userId);
	localStorage.setItem("userLocale", props.state.profile.userLocale);
	return (
		<React.Fragment>
			<Header navLinks={props.state.navLinks} />
			<Main
				profile={props.state.profile}
				messagesPage={props.state.messagesPage}
				postsPage={props.state.postsPage}
				homePage={props.state.homePage}
				users={props.state.users}
				dispatch={props.dispatch}
			/>
		</React.Fragment>
	);
};

export default App;
