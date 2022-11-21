import { applyMiddleware, combineReducers, createStore } from "redux"
import alertReducer from "./alert-reducer"
import homePageReducer from "./home-reducer"
import navLinksReducer from "./links-reducer"
import messagesReducer from "./messages-reducer"
import postsReducer from "./posts-reducer"
import profileReducer, { clearProfileData, setActiveUser, setProfile } from "./profile-reducer"
import usersReducer from "./users-reducer"
import thunk from "redux-thunk"
import { isAuth } from "../api/authAPI"
import { fetchUser } from "../api/usersAPI"

let reducers = combineReducers({
	postsPage: postsReducer,
	messagesPage: messagesReducer,
	profile: profileReducer,
	users: usersReducer,
	navLinks: navLinksReducer,
	customAlert: alertReducer,
	homePage: homePageReducer,
})

let store = createStore(
	reducers,
	applyMiddleware(
		thunk.withExtraArgument({
			authFetch: isAuth().then((response) => {
				if (response.success) {
					store.dispatch(setActiveUser(response.userId))
					fetchUser(response.userId).then((user) => store.dispatch(setProfile(user)))
				} else {
					store.dispatch(clearProfileData())
				}
			}),
		})
	)
)

export default store

// @ts-ignore
window.store = store
