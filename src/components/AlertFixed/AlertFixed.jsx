import React from "react";
import { Alert } from "react-bootstrap";
import styles from "./AlertFixed.module.scss";

const AlertFixed = (props) => {
	let { isAlertVisible, alertText, variant, setShowAlert } = props;

	const handleClose = () => {
		setShowAlert(false);
	};

	if (isAlertVisible) {
		return (
			<Alert
				variant={variant}
				onClose={handleClose}
				dismissible
				className={styles.alert}
			>
				<p className="m-0 text-center">{alertText}</p>
			</Alert>
		);
	}
};

export default AlertFixed;
