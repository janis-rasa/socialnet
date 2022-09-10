let initialState = [
	{ link: "/", linkTitle: "Home" },
	{ link: "/profile", linkTitle: "Profile" },
	{ link: "/posts", linkTitle: "Posts" },
	{ link: "/messages", linkTitle: "Messages" },
	{ link: "/users", linkTitle: "Users" },
];

const navLinksReducer = (state = initialState) => {
	return state;
};

export default navLinksReducer;
