import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { LinkIF } from '../../types/header'

const HeaderNavbarLinks = () => {
  const links = useSelector((state: RootState) => state.header)
  const profile = useSelector((state: RootState) => state.profile.profile)
  const createLinkElement = (
    link: LinkIF,
    index: number
  ): React.JSX.Element => (
    <LinkContainer to={link.link} key={`navbarLinks-${index}`}>
      <Nav.Link className="fw-bolder" eventKey={`navLinks-${index}`}>
        {link.linkTitle}
      </Nav.Link>
    </LinkContainer>
  )
  const linksRender = links.reduce(
    (accumulator: React.JSX.Element[], link: LinkIF, index: number) => {
      if (
        (link.isProtected && profile.userId) ||
        (!link.isProtected && !profile.userId)
      ) {
        accumulator.push(createLinkElement(link, index))
      }
      return accumulator
    },
    []
  )

  return <Nav className="me-auto mb-2 mb-lg-0">{linksRender}</Nav>
}

export default HeaderNavbarLinks
