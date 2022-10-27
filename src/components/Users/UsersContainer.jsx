import React from "react"
import { connect } from "react-redux"
import { setUsers, setActivePage } from "../../redux/users-reducer"
import Users from "./Users"
import { fetchUsers } from "../../api/users"
import MessagesContainer from "../Messages/MessagesContainer"

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
		setUsers,
	} = props

	let [prevPage, setPrevPage] = React.useState(activePage)

	const getUsers = React.useCallback(
		(limit, lastKey) => {
			fetchUsers(limit, lastKey).then((response) => {
				setUsers(response)
			})
		},
		[setUsers]
	)

	React.useEffect(() => {
		if (!users.length || prevPage !== activePage) {
			setPrevPage(activePage)
			getUsers(pageLimit, lastEvaluatedKey)
		}
	}, [users, activePage, pageLimit, prevPage, lastEvaluatedKey, getUsers])

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

const mapStateToProps = (state) => {
	return {
		users: state.users.users,
		total: state.users.total,
		activePage: state.users.activePage,
		pageLimit: state.users.pageLimit,
		lastEvaluatedKey: state.users.lastEvaluatedKey,
		profile: state.profile.profile,
	}
}

export default connect(mapStateToProps, { setUsers, setActivePage })(UsersContainer)
