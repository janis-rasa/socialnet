import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import {
	addPostActionCreator,
	updatePostActionCreator,
} from "../../redux/state";

const NewPost = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleChangePost = (event) => {
		let postValue = { ...props.newPost };
		postValue[event.target.name] = event.target.value;
		props.dispatch(updatePostActionCreator(postValue));
	};

	const handleSavePost = (event) => {
		event.preventDefault();
		props.dispatch(addPostActionCreator());
		handleClose();
	};

	return (
		<div className="mb-3">
			<Button variant="primary" onClick={handleShow}>
				<FontAwesomeIcon icon={regular("square-plus")} size="lg" />
				<span className="ms-2">Add new post</span>
			</Button>
			<Modal show={show} onHide={handleClose} size="lg">
				<Form onSubmit={handleSavePost}>
					<Modal.Header closeButton>
						<Modal.Title>New post</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group className="mb-3" controlId="postTitle">
							<Form.Label>Post title</Form.Label>
							<Form.Control
								type="text"
								required
								onChange={handleChangePost}
								name="postTitle"
								value={props.newPost.postTitle}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="postText">
							<Form.Label>Post text</Form.Label>
							<Form.Control
								as="textarea"
								rows={5}
								required
								onChange={handleChangePost}
								name="postText"
								value={props.newPost.postText}
							/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" type="submit">
							<FontAwesomeIcon icon={regular("square-check")} size="lg" />
							<span className="ms-2">Save post</span>
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</div>
	);
};

export default NewPost;
