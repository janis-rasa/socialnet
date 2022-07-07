import React from "react"
import Card from "react-bootstrap/Card"
import classes from "./Post.module.scss"

const Post = (props) => {
	return (
		<Card className={classes.item}>
			<Card.Img
				variant="top"
				src={props.post.imageUrl}
				className={`${classes.item__img} ${classes.item__img_card}`}
			/>
			<Card.Body>
				<Card.Title>{props.post.title}</Card.Title>
				<Card.Text>{props.post.text}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Post
