const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";
let store = {
	_state: {
		posts: [
			{
				id: 1,
				title: "Card Title 1",
				text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
				imageUrl:
					"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181d5017221%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181d5017221%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
			},
			{
				id: 2,
				title: "Card Title 2",
				text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eaque amet perferendis excepturi voluptates quam neque at officiis minus!",
				imageUrl:
					"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181d5017221%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181d5017221%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23121287%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
			},
		],
		newPost: {
			postTitle: "",
			postText: "",
		},
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
		users: [
			{ firstName: "First", lastName: "User", userId: 1 },
			{ firstName: "Second", lastName: "User", userId: 2 },
			{ firstName: "FirstName", lastName: "LastName", userId: 3 },
		],
		navLinks: [
			{ link: "/", linkTitle: "Home" },
			{ link: "/profile", linkTitle: "Profile" },
			{ link: "/posts", linkTitle: "Posts" },
			{ link: "/messages", linkTitle: "Messages" },
		],
		profile: {
			userId: 3,
			firstName: "FirstName",
			lastName: "LastName",
			email: "test@mail.com",
			userLocale: "lv",
			info: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
		},
	},
	_callSubscriber() {
		console.log("render");
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		switch (action.type) {
			case ADD_POST:
				const newPost = {
					title: this._state.newPost.postTitle,
					text: this._state.newPost.postText,
					id: Date.now(),
					imageUrl:
						"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181d5017221%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181d5017221%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23121287%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
				};
				this._state.posts.push(newPost);
				this._state.newPost = { postTitle: "", postText: "" };
				this._callSubscriber();
				break;
			case UPDATE_POST:
				this._state.newPost = action.postValue;
				this._callSubscriber();
				break;
			case ADD_MESSAGE:
				const userIndex = this._state.messages.findIndex(
					(element) => element.userId === action.userId
				);
				if (userIndex >= 0) {
					this._state.messages[userIndex].messages = [
						...this._state.messages[userIndex].messages,
						{
							text: this._state.newMessage,
							targetUserId: action.targetUserId,
							timestamp: Date.now(),
						},
					];
					this._state.newMessage = "";
					this._callSubscriber();
				}
				break;
			case UPDATE_MESSAGE:
				this._state.newMessage = action.text;
				this._callSubscriber();
				break;
			default:
				return this._state;
		}
	},
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = (postValue) => ({
	type: UPDATE_POST,
	postValue: postValue,
});

export const addMessageActionCreator = (targetUserId, currentUserId) => ({
	type: ADD_MESSAGE,
	targetUserId: targetUserId,
	userId: currentUserId,
});

export const updateMessageActionCreator = (text) => ({
	type: UPDATE_MESSAGE,
	text: text,
});

// @ts-ignore
window.store = store;

export default store;
