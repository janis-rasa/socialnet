import React, { useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { setUsersAc } from "../../redux/users-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
	let { users, setUsers, profile } = props;
	const [activeUser, setActiveUser] = useState(0);
	let location = useLocation().pathname.split("/");

	React.useEffect(() => {
		if (!users.length) {
			fetch("http://localhost:5000/users")
				.then((response) => response.json())
				.then((users) => setUsers(users));
		}
		if (!location[2] && activeUser) {
			setActiveUser(0);
		}
	}, [users, setUsers, location, setActiveUser, activeUser]);

	if (users.length) {
		return (
			<Messages
				users={users}
				profile={profile}
				activeUser={activeUser}
				setActiveUser={setActiveUser}
			/>
		);
	}
};
const mapStateToProps = (state) => ({
	profile: state.profile,
	users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
	setUsers: (users) => {
		dispatch(setUsersAc(users));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
