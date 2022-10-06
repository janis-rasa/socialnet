import AlertFixed from "./AlertFixed"
import { setAlert } from "../../redux/alert-reducer"
import React from "react"
import { connect } from "react-redux"

const AlertContainer = (props) => {
	return (
		props.isAlertVisible && (
			<AlertFixed alertText={props.alertText} variant={props.variant} setAlert={props.setAlert} />
		)
	)
}

const mapStateToProps = (state) => {
	return {
		isAlertVisible: state.customAlert.isAlertVisible,
		alertText: state.customAlert.alertText,
		variant: state.customAlert.variant,
	}
}

export default connect(mapStateToProps, { setAlert })(AlertContainer)
