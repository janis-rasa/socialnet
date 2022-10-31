import React from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { setAlert } from "../../redux/alert-reducer"
import { addMessage, setTargetUser, updateMessage, setMessages } from "../../redux/messages-reducer"
import { fetchUserMessages, postNewMessage, fetchTargetUserMessages } from "../../api/messagesAPI"
import { fetchUserByName } from "../../api/usersAPI"
import SelectedMessages from "./SelectedMessages"
import { arraySort } from "../../utils/sort"

const SelectedMessagesContainer = (props) => {
	let {
		profile,
		targetUser,
		newMessageText,
		updateMessage,
		messages,
		setAlert,
		setMessages,
		setTargetUser,
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

	const getMessages = React.useCallback(
		(targetUserId) => {
			Promise.all([fetchUserMessages(targetUserId), fetchTargetUserMessages(targetUserId)]).then(
				(response) => {
					let selectedMessages = arraySort(
						[...response[0], ...response[1]],
						"unixTimestamp",
						"DESC"
					)
					setMessages(selectedMessages)
				}
			)
		},
		[setMessages]
	)

	const getTargetUser = React.useCallback(
		(targetUserName) => {
			fetchUserByName(targetUserName).then((response) => setTargetUser(response))
		},
		[setTargetUser]
	)

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
	setMessages,
	addMessage,
	updateMessage,
	setAlert,
	setTargetUser,
	...mapDispatchToProps,
})(SelectedMessagesContainer)
