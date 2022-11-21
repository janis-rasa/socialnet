import React from "react"
import Login from "./Login"
import { connect } from "react-redux"
import { postCredentialsThunkCreator } from "../../redux/profile-reducer"
import { useNavigate } from "react-router-dom"

const LoginContainer = (props) => {
	const { loginError, activeUserId } = props
	const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")
	let [isSubmitDisabled, setSubmitDisabled] = React.useState(false)
	const navigate = useNavigate()

	React.useEffect(() => {
		setSubmitDisabled(false)
		if (activeUserId) {
			navigate("/")
		}
	}, [loginError, activeUserId, navigate])

	const submitLogin = () => {
		setSubmitDisabled(true)
		if (email && password) {
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

export default connect(mapStateToProps, { postCredentials: postCredentialsThunkCreator })(
	LoginContainer
)
