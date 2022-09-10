const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let initialState = {
	messages: [
		{
			userId: 1,
			messages: [
				{
					text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
					timestamp: 1659339265000,
					targetUserId: 3,
				},
				{
					text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
					timestamp: 1659382465000,
					targetUserId: 3,
				},
				{
					text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					timestamp: 1659425665000,
					targetUserId: 3,
				},
			],
		},
		{
			userId: 2,
			messages: [
				{
					text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					timestamp: 1659339265000,
					targetUserId: 3,
				},
				{
					text: "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					timestamp: 1659425665000,
					targetUserId: 3,
				},
				{
					text: "Was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.",
					timestamp: 1659468865000,
					targetUserId: 3,
				},
				{
					text: "Alternatively, you can use this shorthand version for Cards with body only, and no other children. This is some text within a card body.",
					timestamp: 1659627265000,
					targetUserId: 3,
				},
				{
					text: "Alternatively, you can use this shorthand version for Cards with body only, and no other children. This is some text within a card body.",
					timestamp: 1659967123000,
					targetUserId: 3,
				},
			],
		},
		{
			userId: 3,
			messages: [
				{
					text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					timestamp: 1659339270000,
					targetUserId: 1,
				},
				{
					text: "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					timestamp: 1659425665000,
					targetUserId: 1,
				},
				{
					text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
					timestamp: 1659468865000,
					targetUserId: 1,
				},
				{
					text: "Alternatively, you can use this shorthand version for Cards with body only, and no other children. This is some text within a card body.",
					timestamp: 1659627265000,
					targetUserId: 1,
				},
				{
					text: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. ",
					timestamp: 1659339285000,
					targetUserId: 2,
				},
				{
					text: "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
					timestamp: 1659382565000,
					targetUserId: 2,
				},
				{
					text: "Quisque at placerat est. In elit sapien, bibendum quis euismod eget, ultricies eget ex. Cras iaculis rhoncus sodales. Duis ut mi euismod, rhoncus nisl non, efficitur magna. Curabitur laoreet eros et elit convallis placerat. Sed tincidunt sagittis tellus, sit amet ultrices nibh pellentesque at. Quisque efficitur lectus id magna ultricies commodo. Aenean a egestas ipsum. ",
					timestamp: 1659435665000,
					targetUserId: 2,
				},
			],
		},
	],
	newMessage: "",
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messages: state.messages.map((element) => {
					if (element.userId === action.userId) {
						element.messages = [
							...element.messages,
							{
								text: state.newMessage,
								targetUserId: action.targetUserId,
								timestamp: Date.now(),
							},
						];
					}
					return element;
				}),
				newMessage: "",
			};
		case UPDATE_MESSAGE:
			return { ...state, newMessage: action.text };
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

export default messagesReducer;
