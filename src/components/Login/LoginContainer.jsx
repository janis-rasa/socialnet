import React from "react"
import Login from "./Login"
import { connect } from "react-redux"
import { setProfile } from "../../redux/profile-reducer"
import { postCredentials } from "../../api/auth"

const LoginContainer = (props) => {
	let { setProfile } = props
	const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")
	let [isSubmitDisabled, setSubmitDisabled] = React.useState(false)

	//const formData = React.useMemo(() => ({ password: password, email: email }), [password, email])

	const submitLogin = () => {
		setSubmitDisabled(false)
		if (email && password) {
			postCredentials({ password: password, email: email }).then((response) => {
				setProfile(response)
			})
		} else {
			// setSubmitDisabled(false)
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
const mapStateToProps = (state) => {
	return {}
}

export default connect(mapStateToProps, { setProfile })(LoginContainer)
