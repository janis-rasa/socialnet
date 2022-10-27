import React from "react"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"

const MessagesNavItem = (props) => {
	const handleActiveUser = () => {
		//props.setTargetUserName(props.user.userName)
	}

	return (
		<ListGroup.Item as='li' active={props.user.userName === props.targetUserName}>
			<Link to={props.user.userName} onClick={handleActiveUser} className='nav-link'>
				{props.user.firstName} {props.user.lastName}
			</Link>
		</ListGroup.Item>
	)
}

export default MessagesNavItem
