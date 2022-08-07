import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Message from "./Message";

const MessageContainer = (props) => {
	let { messages, setActiveUser, activeUser } = props;
	let { userId } = useParams();
	const [selectedMessages, setSelectedMessages] = useState({});

	useEffect(() => {
		if (userId) {
			let messagesIndex = messages.findIndex(
				(element) => element.userId === parseInt(userId)
			);
			if (messagesIndex >= 0) {
				setSelectedMessages(messages[messagesIndex]);
			}
			if (!activeUser) {
				setActiveUser(parseInt(userId));
			}
		}
	}, [userId, messages, setActiveUser, activeUser]);

	if (Object.keys(selectedMessages).length !== 0) {
		return <Message messages={selectedMessages} />;
	} else {
		return <Alert variant="warning">Sorry, no such user</Alert>;
	}
};

export default MessageContainer;
