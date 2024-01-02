import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import LoginContainer from '../Login/LoginContainer'
import LogoutContainer from '../Logout/LogoutContainer'
import NoMatch from '../NoMatch/NoMatch'
import Home from '../Home/Home'

const Main = () => {
  return (
    <Container className="py-5">
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/logout" element={<LogoutContainer />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Container>
  )
}

export default Main
