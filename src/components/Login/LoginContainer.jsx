import React from "react"
import Login from "./Login"
import { connect } from "react-redux"
import { postCredentialsThunkCreator } from "../../redux/profile-reducer"

const LoginContainer = (props) => {
	const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")
	let [isSubmitDisabled, setSubmitDisabled] = React.useState(false)

	const submitLogin = () => {
		if (email && password) {
			props.postCredentials({ password: password, email: email })
		}
		setSubmitDisabled(false)
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
})

export default connect(mapStateToProps, { postCredentials: postCredentialsThunkCreator })(
	LoginContainer
)
