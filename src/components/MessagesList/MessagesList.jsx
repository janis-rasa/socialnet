import React, { useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";
import MessageContainer from "../Message/MessageContainer";
import UserItem from "../UserItem/UserItem";

const MessagesList = (props) => {
	const [activeUser, setActiveUser] = useState(0);
	let location = useLocation().pathname.split("/");
	if (!location[2] && activeUser) {
		setActiveUser(0);
	}

	const userListRender = props.users.map((user, index) => (
		<UserItem
			setActiveUser={setActiveUser}
			user={user}
			key={"user" + index}
			activeUser={activeUser}
		/>
	));

	return (
		<React.Fragment>
			<h1 className="visually-hidden">Messages</h1>
			<Row>
				<Col sm={4} xxl={3}>
					<ListGroup as="ul">{userListRender}</ListGroup>
				</Col>
				<Col sm={8} xxl={9}>
					<Routes>
						<Route
							path=":userId"
							element={
								<MessageContainer
									messages={props.messages}
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

export default MessagesList;
