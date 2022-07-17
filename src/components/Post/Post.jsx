import React from "react";
import classes from "./Post.module.scss";

const Post = (props) => {
	return (
		<div className={`${classes.item} card`}>
			<img
				src={props.post.imageUrl}
				className={`${classes.item__img} ${classes.item__img_card} card-img-top`}
				alt="Post"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.post.title}</h5>
				<p className="card-text">{props.post.text}</p>
			</div>
		</div>
	);
};

export default Post;
