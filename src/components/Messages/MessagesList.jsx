import React from "react"
import { Card, Col, Row } from "react-bootstrap"

const MessagesList = (props) => {
	const messagesRender = props.messages.map((message, index) => {
		const date = new Date(message.unixTimestamp)
		const isOwn = message.userId === props.currentUserId
		return (
			<Row key={"message" + index} className={isOwn && "justify-content-end"}>
				<Col xs='11' lg='9'>
					<Card className='mb-3'>
						<Card.Body>
							<Card.Text>{message.text}</Card.Text>
						</Card.Body>
						<Card.Footer className={(isOwn ? "text-end " : "") + "text-muted"}>
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
