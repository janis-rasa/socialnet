import React from 'react'
import { useDispatch } from 'react-redux'
import Logout from './Logout'
import authAPI from '../../api/auth-api'
import { resetProfile } from '../Profile/profileSlice'

const LogoutContainer = () => {
  const dispatch = useDispatch()
  const logout = () => {
    authAPI.logoutUser().then((response) => {
      console.log('Logout response', response)
      dispatch(resetProfile())
    })
  }
  return <Logout logout={logout} />
}

export default LogoutContainer
