const SET_CUSTOM_ALERT = "SET_CUSTOM_ALERT"

let initialState = {
	isAlertVisible: false,
	alertText: "",
	variant: "primary",
}

const alertReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CUSTOM_ALERT:
			return {
				...state,
				isAlertVisible: action.isAlertVisible,
				alertText: action.alertText,
				variant: action.variant,
			}
		default:
			return state
	}
}

export const setAlert = (isAlertVisible = false, alertText = "", variant = "primary") => ({
	type: SET_CUSTOM_ALERT,
	isAlertVisible: isAlertVisible,
	alertText: alertText,
	variant: variant,
})

export default alertReducer
