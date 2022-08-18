import { connect } from "react-redux";
import {
	addMessageActionCreator,
	updateMessageActionCreator,
} from "../../redux/messages-reducer";
import SelectedMessages from "./SelectedMessages";

const mapStateToProps = (state, ownProps) => {
	return {
		messages: state.messagesPage.messages,
		newMessage: state.messagesPage.newMessage,
		profile: state.profile,
		activeUser: ownProps.activeUser,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addMessage: (targetUserId, currentUserId) => {
			dispatch(addMessageActionCreator(targetUserId, currentUserId));
		},
		updateMessage: (text) => {
			dispatch(updateMessageActionCreator(text));
		},
		setActiveUser: ownProps.setActiveUser,
	};
};

const SelectedMessagesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectedMessages);

export default SelectedMessagesContainer;
