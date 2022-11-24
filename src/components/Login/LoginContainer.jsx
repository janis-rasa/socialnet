import React from "react"
import Login from "./Login"
import { connect } from "react-redux"
import { postCredentialsThunkCreator } from "../../redux/profile-reducer"
import { useLocation, useNavigate } from "react-router-dom"
import { setLoadingThunkCreator } from "../../redux/app-reducer"

const LoginContainer = (props) => {
	const { loginError, activeUserId } = props
	const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")
	let [isSubmitDisabled, setSubmitDisabled] = React.useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	const from = location.state?.from?.pathname || "/"

	React.useEffect(() => {
		setSubmitDisabled(false)
		if (activeUserId) {
			navigate(from, { replace: true })
		}
	}, [loginError, activeUserId, from, navigate])

	const submitLogin = () => {
		if (email && password) {
			props.setLoading(true)
			props.postCredentials({ password: password, email: email })
		}
	}

	return (
		<Login
			email={email}
			password={password}
			isSubmitDisabled={isSubmitDisabled}
			setEmail={setEmail}
			setPassword={setPassword}
			submitLogin={submitLogin}
			setSubmitDisabled={setSubmitDisabled}
		/>
	)
}
const mapStateToProps = (state) => ({
	activeUserId: state.profile.activeUserId,
	loginError: state.profile.loginError,
})

export default connect(mapStateToProps, {
	postCredentials: postCredentialsThunkCreator,
	setLoading: setLoadingThunkCreator,
})(LoginContainer)
