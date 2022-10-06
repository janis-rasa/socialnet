import React from "react"
import { Alert } from "react-bootstrap"
import { connect } from "react-redux"
import { addMessage, updateMessage } from "../../redux/messages-reducer"
import SelectedMessages from "./SelectedMessages"

const SelectedMessagesContainer = (props) => {
	let { profile, correspondence, newMessage, updateMessage, targetUserId, targetUserFullName } =
		props
	const [selectedMessages, setSelectedMessages] = React.useState([])
	const addMessage = () => {
		props.addMessage(targetUserId)
	}

	React.useEffect(() => {
		if (targetUserId) {
			const messages = correspondence.find(
				(element) => element.targetUserId === targetUserId
			).messages
			if (messages.length > 0) {
				setSelectedMessages(messages)
			}
		}
	}, [targetUserId, correspondence, profile.userId])

	if (selectedMessages.length) {
		return (
			<SelectedMessages
				selectedMessages={selectedMessages}
				newMessage={newMessage}
				profile={profile}
				addMessage={addMessage}
				updateMessage={updateMessage}
				targetUserId={targetUserId}
				targetUserFullName={targetUserFullName}
			/>
		)
	} else {
		return <Alert variant='warning'>Sorry, no messages</Alert>
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		correspondence: state.messagesPage.correspondence,
		newMessage: state.messagesPage.newMessage,
		profile: state.profile,
		targetUserId: ownProps.targetUserId,
		targetUserFullName: ownProps.targetUserFullName,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addMessage,
		updateMessage,
		setTargetUserId: ownProps.setTargetUserId,
	}
}

export default connect(mapStateToProps, { addMessage, updateMessage, mapDispatchToProps })(
	SelectedMessagesContainer
)
