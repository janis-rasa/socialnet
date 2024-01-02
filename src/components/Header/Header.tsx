import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import HeaderNavbarLinks from './HeaderNavbarLinks'
import logo from './logo.svg'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logo} className="d-block my-1" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <HeaderNavbarLinks />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
