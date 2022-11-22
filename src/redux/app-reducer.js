const LOADING = "LOADING"

const initialState = {
	isLoading: true,
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return { ...state, isLoading: action.isLoading }
		default:
			return state
	}
}

export const setLoading = (isLoading) => {
	return { type: LOADING, isLoading: isLoading }
}

export const LoadingThunkCreator = (isLoading) => {
	return (dispatch) => {
		dispatch(setLoading(isLoading))
	}
}

export default appReducer
