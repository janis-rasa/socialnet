import React from "react";
import { Card, Col } from "react-bootstrap";
import styles from "./UserCard.module.scss";

const UserCard = (props) => {
	return (
		<Col>
			<Card className={styles.card}>
				<Card.Body className={styles.body}>
					<Card.Img src={props.user.imageUrl} className={styles.image} />
					<Card.Title className={styles.title}>
						{props.user.firstName} <br /> {props.user.lastName}
					</Card.Title>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default UserCard;
