import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const mapStateToProps = (state) => {
	return {
		activeUserId: state.profile.activeUserId,
	}
}

export const withAuth = (PassedComponent) => {
	const WrappedComponent = (props) => {
		let { activeUserId } = props
		return activeUserId ? <PassedComponent {...props} /> : <Navigate to='/login' replace={true} />
	}

	return connect(mapStateToProps, {})(WrappedComponent)
}
