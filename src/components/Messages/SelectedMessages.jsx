import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddMessage from "./AddMessage";
import MessagesList from "./MessagesList";

const SelectedMessages = (props) => {
	let { messages, newMessage, profile, activeUser, setActiveUser } = props;
	let targetUserId = parseInt(useParams().userId);
	const currentUserId = profile.userId;
	const [selectedMessages, setSelectedMessages] = useState([]);

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
				setSelectedMessages(flattedMessages);
			}
			if (!activeUser) {
				setActiveUser(targetUserId);
			}
		}
	}, [targetUserId, messages, setActiveUser, activeUser, currentUserId]);

	const addMessage = () => {
		props.addMessage(targetUserId, currentUserId);
	};

	if (Object.keys(selectedMessages).length !== 0) {
		return (
			<React.Fragment>
				<MessagesList
					messages={selectedMessages}
					currentUserId={currentUserId}
					targetUserId={targetUserId}
					userLocale={profile.userLocale}
				/>
				<AddMessage
					newMessage={newMessage}
					addMessage={addMessage}
					updateMessage={props.updateMessage}
				/>
			</React.Fragment>
		);
	} else {
		return <Alert variant="warning">Sorry, no messages</Alert>;
	}
};

export default SelectedMessages;
