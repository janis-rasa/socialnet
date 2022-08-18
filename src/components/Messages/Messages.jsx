import React, { useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";
import SelectedMessagesContainer from "./SelectedMessagesContainer";
import MessagesNavItem from "./MessagesNavItem";

const Messages = (props) => {
	const [activeUser, setActiveUser] = useState(0);
	let location = useLocation().pathname.split("/");

	if (!location[2] && activeUser) {
		setActiveUser(0);
	}

	const userListRender = props.users.flatMap((user, index) => {
		if (user.userId === props.profile.userId) {
			return [];
		}
		return (
			<MessagesNavItem
				setActiveUser={setActiveUser}
				user={user}
				key={"user" + index}
				activeUser={activeUser}
			/>
		);
	});

	return (
		<React.Fragment>
			<h1 className="visually-hidden">Messages</h1>
			<Row>
				<Col sm={4} xl={3} xxl={2}>
					<ListGroup as="ul">{userListRender}</ListGroup>
				</Col>
				<Col sm={8} xl={9} xxl={10}>
					<Routes>
						<Route
							path=":userId"
							element={
								<SelectedMessagesContainer
									setActiveUser={setActiveUser}
									activeUser={activeUser}
								/>
							}
						/>
					</Routes>
				</Col>
			</Row>
		</React.Fragment>
	);
};

export default Messages;
