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
				setTargetUserId={props.setTargetUserId}
				setTargetUserFullName={props.setTargetUserFullName}
				user={user}
				key={"user" + index}
				targetUserId={props.targetUserId}
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
									setTargetUserId={props.setTargetUserId}
									targetUserId={props.targetUserId}
									targetUserFullName={props.targetUserFullName}
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
