const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const SET_MESSAGES = "SET_MESSAGES";

let initialState = {
	correspondence: [],
	newMessage: "",
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				correspondence: state.correspondence.map((element) => {
					if (element.userId === action.userId) {
						element.correspondence = [
							...element.correspondence,
							{
								text: state.newMessage,
								timestamp: Date.now(),
								isOwn: true,
							},
						];
					}
					return element;
				}),
				newMessage: "",
			};
		case UPDATE_MESSAGE:
			return { ...state, newMessage: action.text };
		case SET_MESSAGES:
			return { ...state, correspondence: action.correspondence };
		default:
			return state;
	}
};

export const addMessageAC = (targetUserId, currentUserId) => ({
	type: ADD_MESSAGE,
	targetUserId: targetUserId,
	userId: currentUserId,
});

export const updateMessageAC = (text) => ({
	type: UPDATE_MESSAGE,
	text: text,
});

export const setMessagesAC = (correspondence) => ({
	type: SET_MESSAGES,
	correspondence: correspondence,
});

export default messagesReducer;
