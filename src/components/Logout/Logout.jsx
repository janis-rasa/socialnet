import React from "react"
import { Button } from "react-bootstrap"

const Logout = (props) => {
	const handleLogout = () => {
		props.logout()
	}
	return (
		<div>
			<Button size='lg' onClick={handleLogout}>
				Logout
			</Button>
		</div>
	)
}

export default Logout
