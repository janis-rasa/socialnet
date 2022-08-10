import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button, Form, Alert } from "react-bootstrap";

const AddMessage = (props) => {
	const [showAlert, setShowAlert] = useState(false);
	const handleSaveMessage = (event) => {
		event.preventDefault();
		if (!props.newMessage) {
			setShowAlert(true);
			return;
		}
		props.addMessage();
	};

	const handleUpdateMessage = (event) => {
		props.updateMessage(event.target.value);
	};

	const alert = () => {
		return (
			<Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
				<p className="m-0">Please fill message text</p>
			</Alert>
		);
	};

	return (
		<Form className="pt-3">
			<hr />
			<Form.Group className="mt-3 mb-3" controlId="message">
				<Form.Label>New message</Form.Label>
				<Form.Control
					as="textarea"
					rows={5}
					onChange={handleUpdateMessage}
					value={props.newMessage}
					required
				/>
			</Form.Group>
			<Button variant="primary" type="submit" onClick={handleSaveMessage}>
				<FontAwesomeIcon icon={regular("message")} size="lg" />
				<span className="ms-2">Send message</span>
			</Button>
			{showAlert && alert()}
		</Form>
	);
};

export default AddMessage;
