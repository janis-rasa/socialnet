const SET_USERS = "SET_USERS"
const SET_PAGE = "SET_PAGE"
const SET_TOTAL = "SET_TOTAL"

let initialState = {
	users: [],
	total: 0,
	activePage: 1,
	pageLimit: 8,
	lastEvaluatedKey: {},
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return { ...state, users: [...action.users], lastEvaluatedKey: action.lastEvaluatedKey }
		case SET_PAGE:
			return { ...state, activePage: action.activePage }
		case SET_TOTAL:
			return { ...state, total: action.total }
		default:
			return state
	}
}

export const setUsers = (response) => ({
	type: SET_USERS,
	users: response.Items,
	lastEvaluatedKey: response.LastEvaluatedKey,
})

export const setTotal = (response) => ({
	type: SET_TOTAL,
	total: response.Count,
})

export const setActivePage = (pageNumber) => ({
	type: SET_PAGE,
	activePage: pageNumber,
})

export default usersReducer
