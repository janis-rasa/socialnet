import { connect } from "react-redux";
import Messages from "./Messages";

const mapStateToProps = (state) => {
	return {
		profile: state.profile,
		users: state.users,
	};
};

const MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;
