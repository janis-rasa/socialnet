import React from "react";
import { connect } from "react-redux";
import { setUsersAc, setActivePageAc } from "../../redux/users-reducer";
import Users from "./Users";

const UsersContainer = (props) => {
	let {
		users,
		setUsers,
		total,
		profile,
		activePage,
		setActivePage,
		pageLimit,
	} = props;

	let [prevPage, setPrevPage] = React.useState(activePage);

	const getUsers = React.useCallback(
		(page, limit) => {
			fetch("http://localhost:5000/users?_page=" + page + "&_limit=" + limit)
				.then((response) =>
					Promise.all([response.json(), response.headers.get("x-total-count")])
				)
				.then((values) => setUsers(values[0], Number(values[1])));
		},
		[setUsers]
	);

	React.useEffect(() => {
		if (!users.length || prevPage !== activePage) {
			setPrevPage(activePage);
			getUsers(activePage, pageLimit);
		}
	}, [users, activePage, pageLimit, prevPage, getUsers]);

	if (users.length) {
		return (
			<Users
				users={users}
				profile={profile}
				activePage={activePage}
				total={total}
				setActivePage={setActivePage}
				pageLimit={pageLimit}
			/>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		users: state.users.users,
		total: state.users.total,
		activePage: state.users.activePage,
		pageLimit: state.users.pageLimit,
		profile: state.profile,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users, total) => dispatch(setUsersAc(users, total)),
		setActivePage: (pageNumber) => dispatch(setActivePageAc(pageNumber)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
