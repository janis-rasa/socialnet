import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"
import { Button, Form } from "react-bootstrap"

const AddMessage = (props) => {
	const handleSaveMessage = (event) => {
		event.preventDefault()
		if (!props.newMessageText) {
			props.setAlert(true, "Please add the message!", "danger")
		} else {
			props.addNewMessage()
		}
	}

	const handleUpdateMessage = (event) => {
		props.updateMessage(event.target.value)
	}

	return (
		<React.Fragment>
			<hr />
			<Form className='text-end'>
				<Form.Group className='mb-3' controlId='message'>
					<Form.Label className='fw-bold'>New message</Form.Label>
					<Form.Control
						as='textarea'
						rows={5}
						onChange={handleUpdateMessage}
						value={props.newMessageText}
						required
					/>
				</Form.Group>
				<Button variant='primary' type='submit' onClick={handleSaveMessage}>
					<FontAwesomeIcon icon={regular("message")} size='lg' />
					<span className='ms-2'>Send message</span>
				</Button>
			</Form>
			<hr />
		</React.Fragment>
	)
}

export default AddMessage
