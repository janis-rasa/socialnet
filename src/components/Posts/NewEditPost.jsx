import React from "react"
import { Button, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"

const NewEditPost = (props) => {
	let [isSubmitDisabled, setSubmitDisabled] = React.useState(false)
	const handleOnPostChange = (event) => {
		props.updatePost(event)
	}

	const handleAddEditPost = (event) => {
		event.preventDefault()
		setSubmitDisabled(true)
		props.saveNewEditPost()
	}

	return (
		<Form onSubmit={handleAddEditPost}>
			<Form.Group className='mb-3' controlId='postTitle'>
				<Form.Label>Post title</Form.Label>
				<Form.Control
					type='text'
					required
					onChange={handleOnPostChange}
					name='title'
					value={props.currentPost.title}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='postText'>
				<Form.Label>Post text</Form.Label>
				<Form.Control
					as='textarea'
					rows={7}
					required
					onChange={handleOnPostChange}
					name='text'
					value={props.currentPost.text}
				/>
			</Form.Group>
			<Button variant='primary' type='submit' disabled={isSubmitDisabled}>
				<FontAwesomeIcon icon={regular("square-check")} size='lg' />
				<span className='ms-2'>Save post</span>
			</Button>
		</Form>
	)
}

export default NewEditPost
