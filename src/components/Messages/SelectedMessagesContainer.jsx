import React from "react"
import { connect } from "react-redux"
import { setAlert } from "../../redux/alert-reducer"
import { addMessage, updateMessage } from "../../redux/messages-reducer"
import SelectedMessages from "./SelectedMessages"

const SelectedMessagesContainer = (props) => {
	let {
		profile,
		correspondence,
		newMessage,
		updateMessage,
		targetUserId,
		targetUserFullName,
		setAlert,
	} = props
	const [selectedMessages, setSelectedMessages] = React.useState([])
	const addMessage = () => {
		props.addMessage(targetUserId)
	}

	React.useEffect(() => {
		if (targetUserId) {
			const messages = correspondence.find((element) => element.targetUserId === targetUserId)
			if (messages && Object.keys(messages).length > 0) {
				setSelectedMessages(messages.messages)
			}
		}
	}, [targetUserId, correspondence, setSelectedMessages])

	return (
		!!selectedMessages.length && (
			<SelectedMessages
				selectedMessages={selectedMessages}
				newMessage={newMessage}
				profile={profile}
				addMessage={addMessage}
				updateMessage={updateMessage}
				targetUserId={targetUserId}
				targetUserFullName={targetUserFullName}
				setAlert={setAlert}
			/>
		)
	)
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

const mapDispatchToProps = (dispatch, ownProps) => ({
	setTargetUserId: ownProps.setTargetUserId,
})

export default connect(mapStateToProps, {
	addMessage,
	updateMessage,
	setAlert,
	...mapDispatchToProps,
})(SelectedMessagesContainer)
