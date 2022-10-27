import React from "react"
import { connect } from "react-redux"
import Messages from "./Messages"

const MessagesContainer = (props) => {
	let { users, profile, activePage, total, setActivePage, pageLimit, totalPages } = props
	const [targetUserName, setTargetUserName] = React.useState("")

	return (
		<Messages
			users={users}
			profile={profile}
			activePage={activePage}
			total={total}
			setActivePage={setActivePage}
			pageLimit={pageLimit}
			totalPages={totalPages}
			targetUserName={targetUserName}
			setTargetUserName={setTargetUserName}
		/>
	)
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
	}
}

export default connect(mapStateToProps)(MessagesContainer)
