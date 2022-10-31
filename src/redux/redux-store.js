import { applyMiddleware, combineReducers, createStore } from "redux"
import alertReducer from "./alert-reducer"
import homePageReducer from "./home-reducer"
import navLinksReducer from "./links-reducer"
import messagesReducer from "./messages-reducer"
import postsReducer from "./posts-reducer"
import profileReducer from "./profile-reducer"
import usersReducer from "./users-reducer"
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
	postsPage: postsReducer,
	messagesPage: messagesReducer,
	profile: profileReducer,
	users: usersReducer,
	navLinks: navLinksReducer,
	customAlert: alertReducer,
	homePage: homePageReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

// @ts-ignore
window.store = store
