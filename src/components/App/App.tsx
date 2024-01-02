import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import Main from '../Main/Main'
// import AlertContainer from '../AlertFixed/AlertContainer'
import Loader from '../Loader/Loader'
import { RootState } from '../../store/store'

const App = (): React.JSX.Element => {
  const isLoading = useSelector((state: RootState) => state.isLoading.state)
  return isLoading ? (
    <Loader />
  ) : (
    <>
      {/* <AlertContainer /> */}
      <Header />
      <Main />
    </>
  )
}

export default App
