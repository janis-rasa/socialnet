import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavbarLinks.module.scss";

const NavbarLinks = (props) => {
	const linksRender = props.links.map((link, index) => (
		<li className="nav-item" key={index}>
			<NavLink
				className={({ isActive }) =>
					(isActive ? classes.active : "") + ` ${classes.link} nav-link`
				}
				to={link.link}
				{...({ isActive }) => (isActive ? 'aria-current="page"' : "")}
			>
				{link.linkTitle}
			</NavLink>
		</li>
	));
	return <ul className="navbar-nav me-auto mb-2 mb-lg-0">{linksRender}</ul>;
};

export default NavbarLinks;
