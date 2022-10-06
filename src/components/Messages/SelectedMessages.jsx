import React from "react"
import AddMessage from "./AddMessage"
import MessagesList from "./MessagesList"
import { Alert } from "react-bootstrap"

const SelectedMessages = (props) => {
	if (props.selectedMessages.length) {
		return (
			<React.Fragment>
				<MessagesList
					selectedMessages={props.selectedMessages}
					currentUserId={props.currentUserId}
					targetUserId={props.targetUserId}
					userLocale={props.profile.userLocale}
					targetUserFullName={props.targetUserFullName}
				/>
				<AddMessage
					newMessage={props.newMessage}
					addMessage={props.addMessage}
					updateMessage={props.updateMessage}
					setAlert={props.setAlert}
				/>
			</React.Fragment>
		)
	} else {
		return <Alert variant='warning'>Sorry, no messages</Alert>
	}
}

export default SelectedMessages
