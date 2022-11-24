import { isAuth, logoutCurrentUser, postCredentials } from "../api/authAPI"
import { fetchUser, fetchUserByName } from "../api/usersAPI"
import { setAlert } from "./alert-reducer"
import { setLoading } from "./app-reducer"

const SET_PROFILE = "SET_PROFILE"
const SET_TARGET_PROFILE = "SET_TARGET_PROFILE"
const SET_ACTIVE_USER = "SET_ACTIVE_USER"
const CLEAR_PROFILE = "CLEAR_PROFILE"
const LOGIN_ERROR = "LOGIN_ERROR"

let initialState = {
	profile: {},
	activeUserId: 0,
	expireTimestamp: 0,
	targetProfile: {},
	loginError: {},
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return { ...state, profile: action.profile }
		case SET_TARGET_PROFILE:
			return { ...state, targetProfile: action.targetProfile }
		case SET_ACTIVE_USER:
			return {
				...state,
				activeUserId: action.activeUserId,
				expireTimestamp: action.expireTimestamp,
			}
		case CLEAR_PROFILE:
			return { ...initialState }
		case LOGIN_ERROR:
			return { ...state, loginError: action.error }
		default:
			return state
	}
}

export const setProfile = (user) => ({
	type: SET_PROFILE,
	profile: user,
})

export const setActiveUser = (userId, expireTimestamp) => ({
	type: SET_ACTIVE_USER,
	activeUserId: userId,
	expireTimestamp: expireTimestamp,
})

const setTargetProfile = (user) => ({
	type: SET_TARGET_PROFILE,
	targetProfile: user,
})

export const clearProfileData = () => ({
	type: CLEAR_PROFILE,
})

const loginError = (response) => ({
	type: LOGIN_ERROR,
	error: response,
})

export const postCredentialsThunkCreator = (credentials) => {
	return (dispatch) => {
		postCredentials(credentials).then((response) => {
			if (response.success) {
				dispatch(setActiveUser(response.userId, response.expireTimestamp))
				fetchUser(response.userId).then((user) => dispatch(setProfile(user)))
				dispatch(loginError({}))
			} else {
				dispatch(clearProfileData())
				dispatch(loginError(response))
				dispatch(setAlert(true, response.err, "danger"))
			}
			dispatch(setLoading(false))
		})
	}
}

export const logoutThunkCreator = () => {
	return (dispatch) => {
		logoutCurrentUser().then((response) => {
			dispatch(clearProfileData())
		})
	}
}

export const getUserByNameThunkCreator = (targetUserName) => {
	return (dispatch) => {
		fetchUserByName(targetUserName).then((user) => dispatch(setTargetProfile(user)))
	}
}

export const checkAuthThunkCreator = () => {
	return (dispatch) => {
		isAuth().then((response) => {
			if (response.success) {
				dispatch(setActiveUser(response.userId, response.expireTimestamp))
			} else {
				dispatch(clearProfileData())
			}
		})
	}
}

export default profileReducer
