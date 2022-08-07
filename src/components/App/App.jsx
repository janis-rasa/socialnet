import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = (props) => {
	return (
		<React.Fragment>
			<Header navLinks={props.state.navLinks} />
			<Main
				dialogs={props.state.dialogs}
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
