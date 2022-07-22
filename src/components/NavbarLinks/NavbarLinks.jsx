import React from "react";
import styles from "./NavbarLinks.module.scss";
import { Nav } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

const NavbarLinks = (props) => {
	const linksRender = props.links.map((link, index) => (
		<LinkContainer to={link.link} key={"navbarLinks" + index}>
			<Nav.Link
				className={styles.link}
				eventKey={"link-" + index}
				{...({ isActive }) => (isActive ? 'aria-current="page"' : "")}
			>
				{link.linkTitle}
			</Nav.Link>
		</LinkContainer>
	));

	return <Nav className="me-auto mb-2 mb-lg-0">{linksRender}</Nav>;
};

export default NavbarLinks;
