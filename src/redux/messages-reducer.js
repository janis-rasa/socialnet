import { fetchTargetUserMessages, fetchUserMessages } from "../api/messagesAPI"
import { fetchUserByName } from "../api/usersAPI"
import { arraySort } from "../utils/sort"

const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_MESSAGE = "UPDATE_MESSAGE"
const SET_MESSAGES = "SET_MESSAGES"
const SET_TARGET_USER = "SET_TARGET_USER"

let initialState = {
	messages: [],
	newMessageText: "",
	targetUser: {},
}

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messages: [action.newMessage, ...state.messages],
				newMessageText: "",
			}
		case UPDATE_MESSAGE:
			return { ...state, newMessageText: action.text }
		case SET_MESSAGES:
			return { ...state, messages: action.messages }
		case SET_TARGET_USER:
			return {
				...state,
				targetUser: action.targetUser,
			}
		default:
			return state
	}
}

export const addMessage = (newMessage) => ({
	type: ADD_MESSAGE,
	newMessage: newMessage,
})

export const updateMessage = (text) => ({
	type: UPDATE_MESSAGE,
	text: text,
})

export const setMessages = (messages) => ({
	type: SET_MESSAGES,
	messages: messages,
})

export const setTargetUser = (user) => ({
	type: SET_TARGET_USER,
	targetUser: user,
})

export const getMessagesThunkCreator = (targetUserId) => {
	return (dispatch) => {
		Promise.all([fetchUserMessages(targetUserId), fetchTargetUserMessages(targetUserId)]).then(
			(response) => {
				let selectedMessages = arraySort([...response[0], ...response[1]], "unixTimestamp", "DESC")
				dispatch(setMessages(selectedMessages))
			}
		)
	}
}

export const getTargetUserThunkCreator = (targetUserName) => {
	return (dispatch) => {
		fetchUserByName(targetUserName).then((response) => dispatch(setTargetUser(response)))
	}
}

export default messagesReducer
