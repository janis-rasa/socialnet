import React from "react";
import { Row } from "react-bootstrap";
import UserCard from "./UserCard";

const Users = (props) => {
	const userCardRender = props.users.map((user, index) => {
		return <UserCard user={user} key={"user" + index} />;
	});
	return (
		<Row xs={1} md={2} lg={3} xl={4} className="g-3">
			{userCardRender}
		</Row>
	);
};

export default Users;
