import React from "react";
import { Row, Pagination } from "react-bootstrap";
import UserCard from "./UserCard";

const Users = (props) => {
	let totalPages = Array.from(
		{ length: Math.ceil(props.total / props.pageLimit) },
		(v, i) => ++i
	);

	const setPage = (event) => {
		props.setActivePage(Number(event.target.textContent));
	};

	const renderPagination = totalPages.map((number) => (
		<Pagination.Item
			key={"pagination" + number}
			active={number === props.activePage}
			onClick={setPage}
		>
			{number}
		</Pagination.Item>
	));

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
					<Pagination>{renderPagination}</Pagination>
				</div>
			</React.Fragment>
		);
	}
};

export default Users;
