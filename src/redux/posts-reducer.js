const ADD_POST = "ADD_POST"
const UPDATE_CURRENT_POST = "UPDATE_CURRENT_POST"
const SET_POSTS = "SET_POSTS"
const SET_POST_DATA = "SET_POST_DATA"
const DELETE_POST = "DELETE_POST"

const initialPost = {
	title: "",
	text: "",
	postId: 0,
	imageUrl: "",
	unixTimestamp: 0,
	userId: 0,
}

let initialState = {
	posts: [],
	currentPost: { ...initialPost },
}

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const postIndex = state.posts.findIndex((post) => post.postId === action.postData.postId)
			let currentPostList = []
			if (postIndex >= 0) {
				currentPostList = [...state.posts]
				currentPostList[postIndex] = action.postData
			} else {
				currentPostList = [action.postData, ...state.posts]
			}
			return {
				...state,
				currentPost: { ...initialPost },
				posts: [...currentPostList],
			}
		case UPDATE_CURRENT_POST:
			return {
				...state,
				currentPost: {
					...state.currentPost,
					...(Object.keys(action.postData).length ? action.postData : initialPost),
				},
			}
		case SET_POSTS:
			return { ...state, posts: action.posts }
		case SET_POST_DATA:
			return { ...state, currentPost: action.postData }
		case DELETE_POST:
			const currentPosts = state.posts.filter((post) => post.postId !== action.postId)
			return { ...state, posts: currentPosts }
		default:
			return state
	}
}

export const addPost = (postData) => ({ type: ADD_POST, postData: postData })

export const updateCurrentPost = (postData) => ({
	type: UPDATE_CURRENT_POST,
	postData: postData,
})

export const setPosts = (posts) => ({
	type: SET_POSTS,
	posts: posts,
})

export const setEditPostData = (postData) => ({ type: SET_POST_DATA, postData: postData })

export const removePost = (postId) => ({ type: DELETE_POST, postId: postId })

export default postsReducer
