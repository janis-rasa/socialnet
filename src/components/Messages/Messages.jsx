import React from "react"
import { Row, Col, ListGroup } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import SelectedMessagesContainer from "./SelectedMessagesContainer"
import MessagesNavItem from "./MessagesNavItem"
import CommonPagination from "../Reusable/CommonPagination"

const Messages = (props) => {
	const userListRender = props.users.flatMap((user, index) => {
		if (user.userName === props.profile.userName) {
			return []
		}
		return (
			<MessagesNavItem
				setTargetUserName={props.setTargetUserName}
				targetUserName={props.targetUserName}
				user={user}
				key={"user" + index}
			/>
		)
	})

	return (
		<React.Fragment>
			<h1 className='visually-hidden'>Messages</h1>
			<Row>
				<Col sm={4} xl={3} xxl={2}>
					<ListGroup as='ul'>{userListRender}</ListGroup>
					<div className='d-flex justify-content-center pt-3'>
						<CommonPagination
							setActivePage={props.setActivePage}
							totalPages={props.totalPages}
							activePage={props.activePage}
						/>
					</div>
				</Col>
				<Col sm={8} xl={9} xxl={10}>
					<Routes>
						<Route
							path=':userName'
							element={
								<SelectedMessagesContainer
									targetUserName={props.targetUserName}
									targetUserFullName={props.targetUserFullName}
									setTargetUserName={props.setTargetUserName}
									setTargetUserFullName={props.setTargetUserFullName}
								/>
							}
						/>
					</Routes>
				</Col>
			</Row>
		</React.Fragment>
	)
}

export default Messages
