import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Message = (props) => {
	const messagesRender = props.messages.map((message, index) => {
		const date = new Date(message.timestamp);
		return (
			<Row
				key={"message" + index}
				className={
					message.targetUserId !== props.currentUserId && "justify-content-end"
				}
			>
				<Col xs="11" lg="9">
					<Card className="mb-3">
						<Card.Body>
							<Card.Text>{message.text}</Card.Text>
						</Card.Body>
						<Card.Footer
							className={
								(message.targetUserId !== props.currentUserId
									? "text-end "
									: "") + "text-muted "
							}
						>
							{date.toLocaleString(localStorage.getItem("userLocale"))}
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		);
	});

	return (
		<React.Fragment>
			<h2 className="fs-4">Chat with user {props.targetUserId}</h2>
			{messagesRender}
		</React.Fragment>
	);
};

export default Message;
