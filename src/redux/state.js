let rerenderEntireTree = () => {
	console.log("render");
};

let state = {
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
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
				"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			],
		},
		{
			userId: 2,
			messages: [
				"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				"More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				"Was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.",
				"Alternatively, you can use this shorthand version for Cards with body only, and no other children. This is some text within a card body.",
			],
		},
	],
	users: [
		{ title: "First", userId: 1 },
		{ title: "Second", userId: 2 },
	],
	navLinks: [
		{ link: "/", linkTitle: "Home" },
		{ link: "/profile", linkTitle: "Profile" },
		{ link: "/posts", linkTitle: "Posts" },
		{ link: "/messages", linkTitle: "Messages" },
	],
};

// @ts-ignore
window.state = state;

export const addPost = () => {
	const newPost = {
		title: state.newPost.postTitle,
		text: state.newPost.postText,
		id: Date.now(),
		imageUrl:
			"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181d5017221%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181d5017221%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23121287%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
	};
	state.posts.push(newPost);
	state.newPost = { postTitle: "", postText: "" };
	rerenderEntireTree();
};

export const updatePost = (postValue) => {
	state.newPost = postValue;
	rerenderEntireTree();
};

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
};

export default state;
