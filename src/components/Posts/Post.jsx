import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"
import { Button } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import styles from "./Post.module.scss"

const Post = (props) => {
	const date = new Date(props.post.unixTimestamp)
	const handleDelete = () => {
		props.modifyPost("delete", props.post)
	}
	const handleEdit = () => {
		props.modifyPost("edit", props.post)
	}
	const handleViewPost = () => {
		props.modifyPost("view", props.post)
	}
	const isTextLong = props.post.text.length > 46
	return (
		<Card className={styles.item}>
			<Card.Img variant='top' src={props.post.imageUrl} alt={props.post.title} />
			<Card.Body>
				<Card.Title className='header-underscore'>{props.post.title}</Card.Title>
				<Card.Text className={isTextLong && styles.more}>
					{props.post.text}
					{isTextLong && (
						<span onClick={handleViewPost} className={styles.read}>
							Read more
						</span>
					)}
				</Card.Text>
			</Card.Body>
			<Card.Footer className='d-flex align-items-center'>
				<span className='text-muted'>{date.toLocaleString(props.userLocale)}</span>
				<Button
					onClick={handleEdit}
					variant='success'
					size='sm'
					className='ms-auto'
					title='Edit post'
					disabled={props.isSubmitDisabled}
				>
					<FontAwesomeIcon icon={regular("pen-to-square")} size='lg' />
				</Button>
				<Button
					onClick={handleDelete}
					variant='danger'
					size='sm'
					className='ms-2'
					title='Delete post'
					disabled={props.isSubmitDisabled}
				>
					<FontAwesomeIcon icon={regular("trash-can")} size='lg' />
				</Button>
			</Card.Footer>
		</Card>
	)
}

export default Post
