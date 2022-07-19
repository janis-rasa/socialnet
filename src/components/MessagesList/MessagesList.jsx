import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import MessageUser from "../MessageUser/MessageUser";
import Message from "../Message/Message";

const MessagesList = () => {
	const [selectedMessages, setSelectedMessages] = useState({});
	const [activeUser, setActiveUser] = useState(0);

	const users = [
		{ title: "First", userId: 1 },
		{ title: "Second", userId: 2 },
	];

	const messagesList = [
		{
			userId: 1,
			messages: [
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
				"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			],
		},
		{
			userId: 2,
			messages: [
				"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				"More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				"Was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.",
				"Alternatively, you can use this shorthand version for Cards with body only, and no other children. This is some text within a card body.",
			],
		},
	];

	const onSelectUser = (userId) => {
		if (userId) {
			setActiveUser(userId);
			let messagesIndex = messagesList.findIndex(
				(element) => element.userId === userId
			);
			setSelectedMessages(messagesList[messagesIndex]);
		}
	};

	const usersRender = users.map((user, index) => (
		<MessageUser
			user={user}
			onSelectUser={onSelectUser}
			activeUser={activeUser}
			key={"user" + index}
		/>
	));

	const messagesRender = () => {
		if (Object.keys(selectedMessages).length !== 0) {
			return <Message messages={selectedMessages} />;
		}
	};

	return (
		<React.Fragment>
			<h1 className="visually-hidden">Messages</h1>
			<Row>
				<Col sm={4} xxl={3}>
					<ListGroup
						as={Nav}
						defaultActiveKey="/dialogs/1"
						className="flex-column"
					>
						{usersRender}
					</ListGroup>
				</Col>
				<Col sm={8} xxl={9}>
					{messagesRender()}
				</Col>
			</Row>
		</React.Fragment>
	);
};

export default MessagesList;
