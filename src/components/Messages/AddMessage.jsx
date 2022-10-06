import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"
import { Button, Form } from "react-bootstrap"

const AddMessage = (props) => {
	const handleSaveMessage = (event) => {
		event.preventDefault()
		if (!props.newMessage) {
			props.setAlert(true, "Please add the message!", "danger")
			return
		}
		props.addMessage()
	}

	const handleUpdateMessage = (event) => {
		props.updateMessage(event.target.value)
	}

	return (
		<React.Fragment>
			<Form className='pt-3'>
				<hr />
				<Form.Group className='mt-3 mb-3' controlId='message'>
					<Form.Label>New message</Form.Label>
					<Form.Control
						as='textarea'
						rows={5}
						onChange={handleUpdateMessage}
						value={props.newMessage}
						required
					/>
				</Form.Group>
				<Button variant='primary' type='submit' onClick={handleSaveMessage}>
					<FontAwesomeIcon icon={regular("message")} size='lg' />
					<span className='ms-2'>Send message</span>
				</Button>
			</Form>
		</React.Fragment>
	)
}

export default AddMessage
