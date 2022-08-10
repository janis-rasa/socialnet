const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

const messagesReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			const userIndex = state.messages.findIndex(
				(element) => element.userId === action.userId
			);
			if (userIndex >= 0) {
				state.messages[userIndex].messages = [
					...state.messages[userIndex].messages,
					{
						text: state.newMessage,
						targetUserId: action.targetUserId,
						timestamp: Date.now(),
					},
				];
				state.newMessage = "";
			}
			break;
		case UPDATE_MESSAGE:
			state.newMessage = action.text;
			break;
		default:
	}
	return state;
};

export const addMessageActionCreator = (targetUserId, currentUserId) => ({
	type: ADD_MESSAGE,
	targetUserId: targetUserId,
	userId: currentUserId,
});

export const updateMessageActionCreator = (text) => ({
	type: UPDATE_MESSAGE,
	text: text,
});

export default messagesReducer;
