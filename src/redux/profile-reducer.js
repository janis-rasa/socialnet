const SET_PROFILE = "SET_PROFILE"
let initialState = {
	profile: {},
	activeUserId: 1,
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return { ...state, profile: action.profile }
		default:
			return state
	}
}

export const setProfile = (user) => ({
	type: SET_PROFILE,
	profile: user,
})

export default profileReducer
