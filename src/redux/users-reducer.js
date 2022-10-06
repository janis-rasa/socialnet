const SET_USERS = "SET_USERS"
const SET_PAGE = "SET_PAGE"
let initialState = {
	users: [],
	total: 0,
	activePage: 1,
	pageLimit: 8,
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return { ...state, users: [...action.users], total: action.total }
		case SET_PAGE:
			return { ...state, activePage: action.activePage }
		default:
			return state
	}
}

export const setUsers = (users, total) => ({
	type: SET_USERS,
	users: users,
	total: total,
})

export const setActivePage = (pageNumber) => ({
	type: SET_PAGE,
	activePage: pageNumber,
})

export default usersReducer
