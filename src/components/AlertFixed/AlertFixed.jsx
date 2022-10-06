import React from "react"
import { Alert } from "react-bootstrap"
import styles from "./AlertFixed.module.scss"

const AlertFixed = (props) => {
	let { alertText, variant, setAlert } = props

	const handleClose = () => {
		setAlert(false)
	}

	return (
		<Alert variant={variant} onClose={handleClose} dismissible className={styles.alert}>
			<p className='m-0 text-center'>{alertText}</p>
		</Alert>
	)
}

export default AlertFixed
