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
				dialogs={props.state.dialogs}
				newMessage={props.state.newMessage}
				posts={props.state.posts}
				users={props.state.users}
				messages={props.state.messages}
				newPost={props.state.newPost}
				dispatch={props.dispatch}
			/>
		</React.Fragment>
	);
};

export default App;
