import { postCredentials } from "../api/authAPI"
import { fetchUserByName } from "../api/usersAPI"

const SET_PROFILE = "SET_PROFILE"
const SET_TARGET_PROFILE = "SET_TARGET_PROFILE"
const SET_ACTIVE_USER = "SET_ACTIVE_USER"
const CLEAR_PROFILE = "CLEAR_PROFILE"

let initialState = {
	profile: {},
	activeUserId: 0,
	targetProfile: {},
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return { ...state, profile: action.profile }
		case SET_TARGET_PROFILE:
			return { ...state, targetProfile: action.targetProfile }
		case SET_ACTIVE_USER:
			return { ...state, activeUserId: action.activeUserId }
		case CLEAR_PROFILE:
			return { ...initialState }
		default:
			return state
	}
}

export const setProfile = (user) => ({
	type: SET_PROFILE,
	profile: user,
})

export const setActiveUser = (userId) => ({ type: SET_ACTIVE_USER, activeUserId: userId })

export const setTargetProfile = (user) => ({
	type: SET_TARGET_PROFILE,
	targetProfile: user,
})

export const clearProfileData = () => ({
	type: CLEAR_PROFILE,
})

export const postCredentialsThunkCreator = (credentials) => {
	return (dispatch) => {
		postCredentials(credentials).then((response) => {
			dispatch(setProfile(response))
		})
	}
}

export const getUserByNameThunkCreator = (targetUserName) => {
	return (dispatch) => {
		fetchUserByName(targetUserName).then((user) => dispatch(setTargetProfile(user)))
	}
}

export default profileReducer
