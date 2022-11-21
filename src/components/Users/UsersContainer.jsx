import React from "react"
import { connect } from "react-redux"
import { setActivePage, getUsersThunkCreator } from "../../redux/users-reducer"
import Users from "./Users"
import MessagesContainer from "../Messages/MessagesContainer"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"

const UsersContainer = (props) => {
	let {
		users,
		total,
		profile,
		activePage,
		lastEvaluatedKey,
		pageLimit,
		child,
		setActivePage,
		getUsers,
	} = props

	React.useEffect(() => {
		if (!users.length) {
			getUsers(pageLimit, lastEvaluatedKey)
		}
	}, [users, pageLimit, lastEvaluatedKey, getUsers])

	const totalPages = Array.from({ length: Math.ceil(total / pageLimit) }, (v, i) => ++i)

	if (users.length) {
		switch (child) {
			case "users":
				return (
					<Users
						users={users}
						profile={profile}
						activePage={activePage}
						total={total}
						setActivePage={setActivePage}
						pageLimit={pageLimit}
						totalPages={totalPages}
					/>
				)
			case "messages":
				return (
					<MessagesContainer
						users={users}
						profile={profile}
						activePage={activePage}
						total={total}
						setActivePage={setActivePage}
						pageLimit={pageLimit}
						totalPages={totalPages}
					/>
				)
			default:
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		users: state.users.users,
		total: state.users.total,
		activePage: state.users.activePage,
		pageLimit: state.users.pageLimit,
		lastEvaluatedKey: state.users.lastEvaluatedKey,
		profile: state.profile.profile,
		activeUserId: state.profile.activeUserId,
		child: ownProps.child,
	}
}

export default compose(
	connect(mapStateToProps, { setActivePage, getUsers: getUsersThunkCreator }),
	withAuthRedirect
)(UsersContainer)
