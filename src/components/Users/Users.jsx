import React from "react";
import { Row } from "react-bootstrap";
import CommonPagination from "../Reusable/CommonPagination";
import UserCard from "./UserCard";

const Users = (props) => {
	if (props.users.length) {
		const userCardRender = props.users.map((user, index) => {
			return <UserCard user={user} key={"user" + index} />;
		});

		return (
			<React.Fragment>
				<Row xs={1} md={2} lg={3} xl={4} className="g-3">
					{userCardRender}
				</Row>
				<div className="d-flex justify-content-center pt-5">
					<CommonPagination
						setActivePage={props.setActivePage}
						totalPages={props.totalPages}
						activePage={props.activePage}
					/>
				</div>
			</React.Fragment>
		);
	}
};

export default Users;
