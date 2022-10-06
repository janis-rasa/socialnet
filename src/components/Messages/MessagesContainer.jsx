import React from "react"
import { connect } from "react-redux"
import { useLocation } from "react-router-dom"
import { fetchUserMessages } from "../../api/messages"
import { setMessages } from "../../redux/messages-reducer"
import Messages from "./Messages"

const MessagesContainer = (props) => {
	let {
		users,
		profile,
		activePage,
		total,
		setActivePage,
		pageLimit,
		correspondence,
		totalPages,
		setMessages,
	} = props
	const [targetUserId, setTargetUserId] = React.useState(0)
	const [targetUserFullName, setTargetUserFullName] = React.useState("")
	let location = useLocation().pathname.split("/")

	const getMessages = React.useCallback(
		(userId) => {
			fetchUserMessages(userId).then((response) => setMessages(response[0].correspondence))
		},
		[setMessages]
	)

	React.useEffect(() => {
		if (!correspondence.length) {
			getMessages(profile.userId)
		}
		if (!location[2] && targetUserId) {
			setTargetUserId(0)
		}
	}, [location, profile, correspondence, getMessages, setTargetUserId, targetUserId])

	if (correspondence.length) {
		return (
			<Messages
				users={users}
				profile={profile}
				activePage={activePage}
				total={total}
				setActivePage={setActivePage}
				pageLimit={pageLimit}
				totalPages={totalPages}
				targetUserId={targetUserId}
				setTargetUserId={setTargetUserId}
				setTargetUserFullName={setTargetUserFullName}
				targetUserFullName={targetUserFullName}
			/>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		users: ownProps.users,
		profile: ownProps.profile,
		activePage: ownProps.activePage,
		total: ownProps.total,
		setActivePage: ownProps.setActivePage,
		pageLimit: ownProps.pageLimit,
		totalPages: ownProps.totalPages,
		correspondence: state.messagesPage.correspondence,
	}
}

export default connect(mapStateToProps, { setMessages })(MessagesContainer)
