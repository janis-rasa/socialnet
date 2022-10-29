import React from "react"
import { Modal } from "react-bootstrap"

const ModalCustom = (props) => {
	const handleClose = () => props.setShow(false)

	return (
		<Modal show={props.show} onHide={handleClose}>
			<Modal.Header closeButton>
				{props.title && <Modal.Title>{props.title}</Modal.Title>}
			</Modal.Header>
			<Modal.Body>{props.children}</Modal.Body>
		</Modal>
	)
}

export default ModalCustom
