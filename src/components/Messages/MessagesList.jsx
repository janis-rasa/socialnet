import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const MessagesList = (props) => {
	const messagesRender = props.selectedMessages.map((message, index) => {
		const date = new Date(message.timestamp);
		return (
			<Row
				key={"message" + index}
				className={message.isOwn && "justify-content-end"}
			>
				<Col xs="11" lg="9">
					<Card className="mb-3">
						<Card.Body>
							<Card.Text>{message.text}</Card.Text>
						</Card.Body>
						<Card.Footer
							className={(message.isOwn && "text-end ") + "text-muted "}
						>
							{date.toLocaleString(props.userLocale)}
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		);
	});

	return (
		<React.Fragment>
			<h2 className="fs-4">Chat with user {props.targetUserFullName}</h2>
			{messagesRender}
		</React.Fragment>
	);
};

export default MessagesList;
