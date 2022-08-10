import { combineReducers, createStore } from "redux";
import homePageReducer from "./home-reducer";
import navLinksReducer from "./links-reducer";
import messagesReducer from "./messages-reducer";
import postsReducer from "./posts-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
	postsPage: postsReducer,
	messagesPage: messagesReducer,
	profile: profileReducer,
	users: usersReducer,
	navLinks: navLinksReducer,
	homePage: homePageReducer,
});

let store = createStore(reducers);

export default store;
