import React from "react"
import { Button, Form, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"

const Login = (props) => {
	let { email, password, isSubmitDisabled, setEmail, setPassword, submitLogin, setSubmitDisabled } =
		props

	const handleOnChangeEmail = (event) => {
		setEmail(event.target.value)
	}
	const handleOnChangePassword = (event) => {
		setPassword(event.target.value)
	}

	const handleSubmitCredentials = (event) => {
		event.preventDefault()
		setSubmitDisabled(true)
		submitLogin()
	}

	return (
		<React.Fragment>
			<Form onSubmit={handleSubmitCredentials}>
				<Row>
					<Col sm={6}>
						<Form.Group className='mb-3' controlId='formEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								name='email'
								value={email}
								required
								onChange={handleOnChangeEmail}
							/>
							<Form.Text className='text-muted'>
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
					</Col>
					<Col sm={6}>
						<Form.Group className='mb-3' controlId='formPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
								name='password'
								value={password}
								onChange={handleOnChangePassword}
								required
							/>
						</Form.Group>
					</Col>
				</Row>
				<Button variant='primary' type='submit' disabled={isSubmitDisabled}>
					<FontAwesomeIcon icon={regular("id-badge")} size='lg' />
					<span className='ms-2'>Login</span>
				</Button>
			</Form>
		</React.Fragment>
	)
}

export default Login
