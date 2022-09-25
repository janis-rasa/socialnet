import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessageAC, updateMessageAC } from "../../redux/messages-reducer";
import SelectedMessages from "./SelectedMessages";

const SelectedMessagesContainer = (props) => {
	let targetUserId = parseInt(useParams().userId);
	return (
		<SelectedMessages
			messages={props.messages}
			newMessage={props.newMessage}
			profile={props.profile}
			activeUser={props.activeUser}
			addMessage={props.addMessage}
			updateMessage={props.updateMessage}
			setActiveUser={props.setActiveUser}
			targetUserId={targetUserId}
		/>
	);
};

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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectedMessagesContainer);
