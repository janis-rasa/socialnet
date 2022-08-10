let initialState = [
	{ link: "/", linkTitle: "Home" },
	{ link: "/profile", linkTitle: "Profile" },
	{ link: "/posts", linkTitle: "Posts" },
	{ link: "/messages", linkTitle: "Messages" },
];

const navLinksReducer = (state = initialState) => {
	return state;
};

export default navLinksReducer;
