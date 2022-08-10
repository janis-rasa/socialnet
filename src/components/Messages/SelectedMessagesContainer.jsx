import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
	addMessageActionCreator,
	updateMessageActionCreator,
} from "../../redux/messages-reducer";
import AddMessage from "../AddMessage/AddMessage";
import MessagesList from "./MessagesList";

const SelectedMessagesContainer = (props) => {
	let { messages, setActiveUser, activeUser, newMessage } = props;
	let targetUserId = parseInt(useParams().userId);
	const currentUserId = parseInt(localStorage.getItem("currentUserId"));
	const [selectedMessages, setSelectedMessages] = useState([]);
	const [refreshMessages, setRefreshMessages] = useState(false);

	useEffect(() => {
		if (targetUserId) {
			const allMessages = messages.filter(
				(element) =>
					element.userId === targetUserId || element.userId === currentUserId
			);
			if (allMessages.length > 0) {
				let flattedMessages = [];
				allMessages.forEach((element) => {
					let filteredMessages = element.messages.filter(
						(message) =>
							message.targetUserId === targetUserId ||
							message.targetUserId === currentUserId
					);
					flattedMessages = [...flattedMessages, ...filteredMessages];
				});
				flattedMessages.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
				setRefreshMessages(false);
				setSelectedMessages(flattedMessages);
			}
			if (!activeUser) {
				setActiveUser(targetUserId);
			}
		}
	}, [
		targetUserId,
		messages,
		setActiveUser,
		activeUser,
		currentUserId,
		refreshMessages,
	]);

	const addMessage = () => {
		props.dispatch(addMessageActionCreator(targetUserId, currentUserId));
		setRefreshMessages(true);
	};

	const updateMessage = (text) => {
		props.dispatch(updateMessageActionCreator(text));
	};

	if (Object.keys(selectedMessages).length !== 0) {
		return (
			<React.Fragment>
				<MessagesList
					messages={selectedMessages}
					currentUserId={currentUserId}
					targetUserId={targetUserId}
				/>
				<AddMessage
					newMessage={newMessage}
					addMessage={addMessage}
					updateMessage={updateMessage}
				/>
			</React.Fragment>
		);
	} else {
		return <Alert variant="warning">Sorry, no messages</Alert>;
	}
};

export default SelectedMessagesContainer;
