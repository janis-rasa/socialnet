import React from "react";
import { Card } from "react-bootstrap";

const Message = (props) => {
	const messagesRender = props.messages.messages.map((message, index) => (
		<Card key={"message" + index} className="mb-3">
			<Card.Body>{message}</Card.Body>
		</Card>
	));

	return (
		<div>
			<h4>Message from user {props.messages.userId}</h4>
			{messagesRender}
		</div>
	);
};

export default Message;
