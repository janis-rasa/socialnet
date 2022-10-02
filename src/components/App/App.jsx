import React from "react";
import HeaderContainer from "../Header/HeaderContainer";
import Main from "../Main/Main";
import { setProfileAC } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { fetchUser } from "../../api/users";

const App = (props) => {
	let { profile, activeUserId, setProfile } = props;

	const getUser = React.useCallback(
		(userId) => {
			fetchUser(userId).then((response) => setProfile(response[0]));
		},
		[setProfile]
	);

	React.useEffect(() => {
		if (activeUserId && activeUserId !== profile.userId) {
			getUser(activeUserId);
		}
	}, [activeUserId, profile, getUser]);

	if (Object.keys(profile).length !== 0) {
		return (
			<React.Fragment>
				<HeaderContainer />
				<Main />
			</React.Fragment>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		activeUserId: state.profile.activeUserId,
		profile: state.profile.profile,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setProfile: (userId) => dispatch(setProfileAC(userId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
