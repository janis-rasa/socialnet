import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button, Form } from "react-bootstrap";
import AlertFixed from "../AlertFixed/AlertFixed";

const AddMessage = (props) => {
	const [isAlertVisible, setShowAlert] = useState(false);
	const [alertText, setAlertText] = useState("");
	const handleSaveMessage = (event) => {
		event.preventDefault();
		if (!props.newMessage) {
			setAlertText("Please add the message!");
			setShowAlert(true);
			return;
		}
		props.addMessage();
	};

	const handleUpdateMessage = (event) => {
		props.updateMessage(event.target.value);
	};

	return (
		<React.Fragment>
			<AlertFixed
				setShowAlert={setShowAlert}
				isAlertVisible={isAlertVisible}
				alertText={alertText}
				variant="danger"
			/>
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
			</Form>
		</React.Fragment>
	);
};

export default AddMessage;
