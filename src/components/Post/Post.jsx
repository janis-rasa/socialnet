import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./Post.module.scss";

const Post = (props) => {
	return (
		<Card className={styles.item}>
			<Card.Img
				variant="top"
				src={props.post.imageUrl}
				//className={`${styles.item__img} ${styles.item__img_card}`}
				alt={props.post.title}
			/>
			<Card.Body>
				<Card.Title className="header-underscore">
					{props.post.title}
				</Card.Title>
				<Card.Text>{props.post.text}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Post;
