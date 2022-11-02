import React from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { setAlert } from "../../redux/alert-reducer"
import {
	addMessage,
	updateMessage,
	getMessagesThunkCreator,
	getTargetUserThunkCreator,
} from "../../redux/messages-reducer"
import { postNewMessage } from "../../api/messagesAPI"
import SelectedMessages from "./SelectedMessages"

const SelectedMessagesContainer = (props) => {
	let {
		profile,
		targetUser,
		newMessageText,
		updateMessage,
		messages,
		setAlert,
		getMessages,
		getTargetUser,
	} = props
	let { userName } = useParams()

	const addNewMessage = () => {
		const newMessage = {
			text: props.newMessageText,
			unixTimestamp: Date.now(),
			targetUserId: targetUser.userId,
			userId: profile.activeUserId,
		}
		postNewMessage(newMessage).then((response) => {
			if (response.messageId) {
				props.addMessage(newMessage)
			}
		})
	}

	React.useEffect(() => {
		if (targetUser.userId) {
			getMessages(targetUser.userId)
		}
		if (userName !== targetUser.userName) {
			getTargetUser(userName)
		}
	}, [getMessages, getTargetUser, targetUser, userName])

	return (
		!!messages.length && (
			<SelectedMessages
				messages={messages}
				newMessageText={newMessageText}
				profile={profile}
				addNewMessage={addNewMessage}
				updateMessage={updateMessage}
				targetUserId={targetUser.userId}
				targetUserFullName={`${targetUser.firstName} ${targetUser.lastName}`}
				currentUserId={profile.activeUserId}
				setAlert={setAlert}
			/>
		)
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		targetUser: state.messagesPage.targetUser,
		newMessageText: state.messagesPage.newMessageText,
		profile: state.profile,
		targetUserName: ownProps.targetUserName,
		targetUserFullName: ownProps.targetUserFullName,
		messages: state.messagesPage.messages,
		users: ownProps.users,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	setTargetUserName: ownProps.setTargetUserName,
	setTargetUserFullName: ownProps.setTargetUserFullName,
})

export default connect(mapStateToProps, {
	getMessages: getMessagesThunkCreator,
	getTargetUser: getTargetUserThunkCreator,
	addMessage,
	updateMessage,
	setAlert,
	...mapDispatchToProps,
})(SelectedMessagesContainer)
