import { connect } from "react-redux";
import Profile from "./Profile";

let mapStateToProps = (state) => {
	return {
		profile: state.profile,
	};
};

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;
