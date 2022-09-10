import { connect } from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
	return {
		users: state.users,
		profile: state.profile,
	};
};

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;
