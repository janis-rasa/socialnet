import React from "react"
import { useLocation, Navigate } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
	activeUserId: state.profile.activeUserId,
})

export const withAuthRedirect = (PassedComponent) => {
	const WrappedComponent = (props) => {
		const location = useLocation()
		let { activeUserId } = props
		return activeUserId ? (
			<PassedComponent {...props} />
		) : (
			<Navigate to='/login' state={{ from: location }} replace={true} />
		)
	}

	return connect(mapStateToProps, {})(WrappedComponent)
}
