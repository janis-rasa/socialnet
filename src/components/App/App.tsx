import React from 'react'
import { useSelector } from 'react-redux'
import HeaderContainer from '../Header/HeaderContainer'
import Main from '../Main/Main'
import AlertContainer from '../AlertFixed/AlertContainer'
import Loader from '../Loader/Loader'
import { RootState } from '../../store/store'

const App = () => {
  const isLoading = useSelector((state: RootState) => state.isLoading.state)
  return isLoading ? (
    <Loader />
  ) : (
    <React.Fragment>
      <AlertContainer />
      <HeaderContainer />
      <Main />
    </React.Fragment>
  )
}

export default App
