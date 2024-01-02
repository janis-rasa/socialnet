import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../components/Posts/postsSlice'
import isLoadingReducer from '../components/Loader/loaderSlice'
import headerReducer from '../components/Header/headerSlice'
import profileReducer from '../components/Profile/profileSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    isLoading: isLoadingReducer,
    header: headerReducer,
    profile: profileReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
