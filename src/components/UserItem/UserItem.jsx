import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserItem = (props) => {
	const handleActiveUser = () => {
		props.setActiveUser(props.user.userId);
	};

	return (
		<ListGroup.Item as="li" active={props.user.userId === props.activeUser}>
			<Link
				to={props.user.userId.toString()}
				onClick={handleActiveUser}
				className="nav-link"
			>
				{props.user.title}
			</Link>
		</ListGroup.Item>
	);
};

export default UserItem;
