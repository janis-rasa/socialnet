const SET_PROFILE = "SET_PROFILE"
const SET_TARGET_PROFILE = "SET_TARGET_PROFILE"

let initialState = {
	profile: {},
	activeUserId: 1,
	targetProfile: {},
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return { ...state, profile: action.profile }
		case SET_TARGET_PROFILE:
			return { ...state, targetProfile: action.targetProfile }
		default:
			return state
	}
}

export const setProfile = (user) => ({
	type: SET_PROFILE,
	profile: user,
})

export const setTargetProfile = (user) => ({
	type: SET_TARGET_PROFILE,
	targetProfile: user,
})

export default profileReducer
