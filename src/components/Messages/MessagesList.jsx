import React from "react"
import { Card, Col, Row } from "react-bootstrap"

const MessagesList = (props) => {
	const messagesRender = props.messages.map((message, index) => {
		const date = new Date(message.unixTimestamp)
		return (
			<Row
				key={"message" + index}
				className={message.userId === props.currentUserId ? "justify-content-end" : ""}
			>
				<Col xs='11' lg='9'>
					<Card className='mb-3'>
						<Card.Body>
							<Card.Text>{message.text}</Card.Text>
						</Card.Body>
						<Card.Footer className={(message.isOwn && "text-end ") + "text-muted "}>
							{date.toLocaleString(props.userLocale)}
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		)
	})

	return <React.Fragment>{messagesRender}</React.Fragment>
}

export default MessagesList
