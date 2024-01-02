import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserIF } from '../../types/users'

const initialState = {
  profile: {} as UserIF,
  activeUserId: '',
  expireTimestamp: 0,
  targetProfile: {} as UserIF,
  loginError: '',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserIF>) => {
      state.profile = action.payload
    },
    setActiveUserId: (state, action: PayloadAction<string>) => {
      state.activeUserId = action.payload
    },
    setExpireTimestamp: (state, action: PayloadAction<number>) => {
      state.expireTimestamp = action.payload
    },
    setTargetProfile: (state, action: PayloadAction<UserIF>) => {
      state.targetProfile = action.payload
    },
    setLoginError: (state, action: PayloadAction<string>) => {
      state.loginError = action.payload
    },
    resetProfile: () => initialState,
  },
})

export const {
  setProfile,
  setActiveUserId,
  setTargetProfile,
  setLoginError,
  setExpireTimestamp,
  resetProfile,
} = profileSlice.actions

export default profileSlice.reducer
