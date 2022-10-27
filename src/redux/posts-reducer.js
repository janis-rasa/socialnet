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
			return {
				...state,
				newPost: { postTitle: "", postText: "" },
				posts: [action.newPost, ...state.posts],
			}
		case UPDATE_POST:
			return { ...state, newPost: { ...state.newPost, ...action.postValue } }
		case SET_POSTS:
			return { ...state, posts: action.posts }
		default:
			return state
	}
}

export const addPost = (newPost) => ({ type: ADD_POST, newPost: newPost })

export const updatePost = (postValue) => ({
	type: UPDATE_POST,
	postValue: postValue,
})

export const setPosts = (posts) => ({
	type: SET_POSTS,
	posts: posts,
})

export default postsReducer
