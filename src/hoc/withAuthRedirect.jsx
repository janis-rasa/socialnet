import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const withAuthRedirect = (PassedComponent) => {
	const WrappedComponent = (props) => {
		const location = useLocation()
		const navigate = useNavigate()
		let { activeUserId } = props
		React.useEffect(() => {
			if (!activeUserId) {
				navigate("/login", { state: { from: location }, replace: true })
			}
		}, [activeUserId, location, navigate])
		return <PassedComponent {...props} />
	}

	return WrappedComponent
}
