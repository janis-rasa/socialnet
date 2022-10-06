import React from "react"
import { connect } from "react-redux"
import { setUsers, setActivePage } from "../../redux/users-reducer"
import Users from "./Users"
import { fetchUsers } from "../../api/users"
import MessagesContainer from "../Messages/MessagesContainer"

const UsersContainer = (props) => {
	let { users, setUsers, total, profile, activePage, setActivePage, pageLimit, child } = props

	let [prevPage, setPrevPage] = React.useState(activePage)

	const getUsers = React.useCallback(
		(page, limit) => {
			fetchUsers(page, limit).then((values) => setUsers(values[0], Number(values[1])))
		},
		[setUsers]
	)

	React.useEffect(() => {
		if (!users.length || prevPage !== activePage) {
			setPrevPage(activePage)
			getUsers(activePage, pageLimit)
		}
	}, [users, activePage, pageLimit, prevPage, getUsers])

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
		profile: state.profile.profile,
	}
}

export default connect(mapStateToProps, { setUsers, setActivePage })(UsersContainer)
