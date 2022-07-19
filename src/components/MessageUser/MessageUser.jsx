import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import style from "./MessageUser.module.scss";

const MessageUser = (props) => {
	const handleUser = () => {
		props.onSelectUser(props.user.userId);
	};

	const active = props.activeUser === props.user.userId ? " active" : "";

	return (
		<ListGroup.Item className={"p-0" + active}>
			<span className={style.select + " nav-link"} onClick={handleUser}>
				{props.user.title}
			</span>
		</ListGroup.Item>
	);
};

export default MessageUser;
