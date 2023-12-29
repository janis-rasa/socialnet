import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  state: false,
}

export const postsSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.state = action.payload
    },
  },
})

export const { setLoading } = postsSlice.actions

export default postsSlice.reducer
