import React from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { addMessageAC, updateMessageAC } from "../../redux/messages-reducer";
import SelectedMessages from "./SelectedMessages";

const SelectedMessagesContainer = (props) => {
	let {
		profile,
		correspondence,
		newMessage,
		updateMessage,
		targetUserId,
		targetUserFullName,
	} = props;
	const [selectedMessages, setSelectedMessages] = React.useState([]);
	const currentUserId = profile.userId;
	const addMessage = () => {
		props.addMessage(targetUserId, currentUserId);
	};

	React.useEffect(() => {
		if (targetUserId) {
			const messages = correspondence.find(
				(element) => element.targetUserId === targetUserId
			).messages;
			if (messages.length > 0) {
				setSelectedMessages(messages);
			}
		}
	}, [targetUserId, correspondence, currentUserId]);

	if (selectedMessages.length) {
		return (
			<SelectedMessages
				selectedMessages={selectedMessages}
				newMessage={newMessage}
				profile={profile}
				addMessage={addMessage}
				updateMessage={updateMessage}
				targetUserId={targetUserId}
				targetUserFullName={targetUserFullName}
			/>
		);
	} else {
		return <Alert variant="warning">Sorry, no messages</Alert>;
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		correspondence: state.messagesPage.correspondence,
		newMessage: state.messagesPage.newMessage,
		profile: state.profile,
		targetUserId: ownProps.targetUserId,
		targetUserFullName: ownProps.targetUserFullName,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addMessage: (targetUserName, currentUserName) =>
			dispatch(addMessageAC(targetUserName, currentUserName)),
		updateMessage: (text) => dispatch(updateMessageAC(text)),
		setTargetUserId: ownProps.setTargetUserId,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectedMessagesContainer);
