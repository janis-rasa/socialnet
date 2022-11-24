let initialState = [
	{ link: "/", linkTitle: "Home", isProtected: false },
	{ link: "/profile", linkTitle: "Profile", isProtected: true },
	{ link: "/posts", linkTitle: "Posts", isProtected: true },
	{ link: "/messages", linkTitle: "Messages", isProtected: true },
	{ link: "/users", linkTitle: "Users", isProtected: true },
	{ link: "/login", linkTitle: "Login", isProtected: false },
	{ link: "/logout", linkTitle: "Logout", isProtected: true },
]

const navLinksReducer = (state = initialState) => {
	return state
}

export default navLinksReducer
