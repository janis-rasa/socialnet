import React from "react"
import styles from "./HeaderNavbarLinks.module.scss"
import { Nav } from "react-bootstrap"
import LinkContainer from "react-router-bootstrap/LinkContainer"

const HeaderNavbarLinks = (props) => {
	const createLinkElement = (link, index) => (
		<LinkContainer to={link.link} key={"navbarLinks" + index}>
			<Nav.Link className={styles.link} eventKey={"navLink-" + index}>
				{link.linkTitle}
			</Nav.Link>
		</LinkContainer>
	)
	const linksRender = props.links.reduce((accumulator, link, index) => {
		if (link.isProtected && !!props.profile.userId) {
			accumulator = [...accumulator, createLinkElement(link, index)]
		} else if (!link.isProtected && !props.profile.userId) {
			accumulator = [...accumulator, createLinkElement(link, index)]
		}
		return accumulator
	}, [])

	return <Nav className='me-auto mb-2 mb-lg-0'>{linksRender}</Nav>
}

export default HeaderNavbarLinks
