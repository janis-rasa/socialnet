import React from "react"
import { useNavigate } from "react-router-dom"

export const withAuthRedirect = (PassedComponent) => {
	const WrappedComponent = (props) => {
		const navigate = useNavigate()
		let { activeUserId } = props
		React.useEffect(() => {
			if (!activeUserId) {
				navigate("/login")
			}
		}, [activeUserId, navigate])
		return <PassedComponent {...props} />
	}

	return WrappedComponent
}
