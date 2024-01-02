import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { link: '/', linkTitle: 'Home', isProtected: false },
  { link: '/profile', linkTitle: 'Profile', isProtected: true },
  { link: '/posts', linkTitle: 'Posts', isProtected: true },
  { link: '/messages', linkTitle: 'Messages', isProtected: true },
  { link: '/users', linkTitle: 'Users', isProtected: true },
  { link: '/login', linkTitle: 'Login', isProtected: false },
  { link: '/logout', linkTitle: 'Logout', isProtected: true },
]

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {},
})

export default headerSlice.reducer
