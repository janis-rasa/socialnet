import React from "react"
import AddMessage from "./AddMessage"
import MessagesList from "./MessagesList"
import { Alert } from "react-bootstrap"

const SelectedMessages = (props) => {
	if (props.messages.length) {
		return (
			<React.Fragment>
				<h2 className='fs-4'>Chat with user {props.targetUserFullName}</h2>
				<AddMessage
					targetUserFullName={props.targetUserFullName}
					newMessageText={props.newMessageText}
					addNewMessage={props.addNewMessage}
					updateMessage={props.updateMessage}
					setAlert={props.setAlert}
				/>
				<MessagesList
					messages={props.messages}
					currentUserId={props.currentUserId}
					targetUserId={props.targetUserId}
					userLocale={props.profile.userLocale}
				/>
			</React.Fragment>
		)
	} else {
		return <Alert variant='warning'>Sorry, no messages</Alert>
	}
}

export default SelectedMessages
