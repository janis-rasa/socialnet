import React from 'react'
import HeaderContainer from '../Header/HeaderContainer'
import Main from '../Main/Main'
import { setProfile } from '../../redux/profile-reducer'
import { connect } from 'react-redux'
import AlertContainer from '../AlertFixed/AlertContainer'
import Loader from '../Loader/Loader'

const App = (props) => {
  return props.isLoading ? (
    <Loader />
  ) : (
    <React.Fragment>
      <AlertContainer />
      <HeaderContainer />
      <Main />
    </React.Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.app.isLoading,
  }
}

export default connect(mapStateToProps, { setProfile })(App)
