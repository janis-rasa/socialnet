import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const NewPost = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleChangePost = (event) => {
		switch (event.target.name) {
			case "postTitle":
				props.updatePost({ ...props.newPost, postTitle: event.target.value });
				break;
			case "postText":
				props.updatePost({ ...props.newPost, postText: event.target.value });
				break;
			default:
		}
	};

	const handleSavePost = (event) => {
		event.preventDefault();
		props.addPost();
		handleClose();
	};

	return (
		<div className="mb-3">
			<Button variant="primary" onClick={handleShow}>
				Add new post
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
							Save post
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</div>
	);
};

export default NewPost;
