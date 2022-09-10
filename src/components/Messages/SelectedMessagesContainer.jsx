import { connect } from "react-redux";
import { addMessageAC, updateMessageAC } from "../../redux/messages-reducer";
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
			dispatch(addMessageAC(targetUserId, currentUserId));
		},
		updateMessage: (text) => {
			dispatch(updateMessageAC(text));
		},
		setActiveUser: ownProps.setActiveUser,
	};
};

const SelectedMessagesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectedMessages);

export default SelectedMessagesContainer;
