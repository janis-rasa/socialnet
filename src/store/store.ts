import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../components/Posts/postsSlice'
import isLoadingReducer from '../components/Loader/loaderSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    isLoading: isLoadingReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
