const ADD_POST = "ADD_POST"
const UPDATE_POST = "UPDATE_POST"
const SET_POSTS = "SET_POSTS"

let initialState = {
	posts: [],
	newPost: {
		postTitle: "",
		postText: "",
	},
}

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				title: state.newPost.postTitle,
				text: state.newPost.postText,
				id: Date.now(),
				imageUrl: randomImage(),
			}
			return {
				...state,
				newPost: { postTitle: "", postText: "" },
				posts: [...state.posts, newPost],
			}
		case UPDATE_POST:
			return { ...state, newPost: { ...state.newPost, ...action.postValue } }
		case SET_POSTS:
			return { ...state, posts: action.posts }
		default:
			return state
	}
}

export const addPost = () => ({ type: ADD_POST })

export const updatePost = (postValue) => ({
	type: UPDATE_POST,
	postValue: postValue,
})

export const setPosts = (posts) => ({
	type: SET_POSTS,
	posts: posts,
})

export default postsReducer

const randomImage = () => {
	const randomAct = Math.floor(Math.random() * 167772)
	return "https://loremflickr.com/480/270/abstract?" + randomAct
}
