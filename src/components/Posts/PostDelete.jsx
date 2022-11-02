import React from "react"
import { Button } from "react-bootstrap"

const PostDelete = (props) => {
	let { post, deletePost, setShow } = props
	const handleCancel = () => {
		setShow(false)
	}
	const handleDelete = () => {
		deletePost(post)
	}
	return (
		<React.Fragment>
			<p className='text-danger'>Are you sure, you want to delete the post "{post.title}"?</p>
			<div className='d-flex'>
				<Button onClick={handleCancel} variant='success' className='me-auto'>
					Cancel
				</Button>
				<Button onClick={handleDelete} variant='danger' disabled={props.isSubmitDisabled}>
					Delete
				</Button>
			</div>
		</React.Fragment>
	)
}

export default PostDelete
