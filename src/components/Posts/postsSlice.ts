import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PostIF } from '../../types/posts'

const initialState = {
	posts: [] as PostIF[],
	currentPost: {} as PostIF,
	isFetchingData: false,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostIF>) => {
      state.posts.push(action.payload)
    }
  }
})