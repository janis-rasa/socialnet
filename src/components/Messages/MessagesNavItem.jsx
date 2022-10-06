import React from "react"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"

const MessagesNavItem = (props) => {
	const handleActiveUser = () => {
		props.setTargetUserId(props.user.userId)
		props.setTargetUserFullName(props.user.firstName + " " + props.user.lastName)
	}

	return (
		<ListGroup.Item as='li' active={props.user.userId === props.targetUserId}>
			<Link to={props.user.userName} onClick={handleActiveUser} className='nav-link'>
				{props.user.firstName} {props.user.lastName}
			</Link>
		</ListGroup.Item>
	)
}

export default MessagesNavItem
