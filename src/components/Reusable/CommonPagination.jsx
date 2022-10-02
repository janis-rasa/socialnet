import React from "react";
import { Pagination } from "react-bootstrap";

const CommonPagination = (props) => {
	const setPage = (event) => {
		props.setActivePage(Number(event.target.textContent));
	};

	const renderPagination = props.totalPages.map((number) => (
		<Pagination.Item
			key={"pagination" + number}
			active={number === props.activePage}
			onClick={setPage}
		>
			{number}
		</Pagination.Item>
	));

	return <Pagination>{renderPagination}</Pagination>;
};

export default CommonPagination;
