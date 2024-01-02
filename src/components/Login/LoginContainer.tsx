import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Login from './Login'
import { setLoading } from '../Loader/loaderSlice'
import authAPI from '../../api/auth-api'
import {
  setActiveUserId,
  setLoginError,
  setProfile,
} from '../Profile/profileSlice'
import { UserAuthIF, UserIF } from '../../types/users'
import { ResponseIF } from '../../api/models'

const LoginContainer = () => {
  const { loginError, activeUserId } = useSelector(
    (state: RootState) => state.profile
  )
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const from = location.state?.from?.pathname || '/'

  React.useEffect(() => {
    if (activeUserId) {
      navigate(from, { replace: true })
    }
  }, [loginError, activeUserId, from, navigate])

  const submitLogin = (values: UserAuthIF) => {
    dispatch(setLoading(true))
    authAPI
      .loginUser(values)
      .then((response: ResponseIF<UserIF>) => {
        console.log('Login response: ', response)
        if (!response.data) {
          return
        }
        const { userId } = response.data
        dispatch(setLoginError(''))
        dispatch(setProfile(response.data))
        dispatch(setActiveUserId(userId))
      })
      .catch((error: ResponseIF<undefined>) => {
        console.log('Login error: ', error)
        dispatch(setLoginError(error.message))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }

  return <Login submitLogin={submitLogin} />
}

export default LoginContainer
