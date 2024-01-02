import React from 'react'
import * as Yup from 'yup'
import { Formik, FormikHelpers } from 'formik'
import CustomForm from '../common/CustomForm/CustomForm'
import { CustomFormIF } from '../common/CustomForm/models'
import { UserAuthIF } from '../../types/users'

interface LoginProps {
  // eslint-disable-next-line no-unused-vars
  submitLogin: (values: UserAuthIF) => void
}

const Login = ({ submitLogin }: LoginProps) => {
  // const [isSubmitDisabled, setSubmitDisabled] = React.useState(false)

  const handleSubmitCredentials = (
    values: UserAuthIF,
    actions: FormikHelpers<UserAuthIF>
  ): void => {
    // event.preventDefault()
    // setSubmitDisabled(true)
    actions.setSubmitting(false)
    console.log('Submit: ', values)
    submitLogin(values)
  }

  const formFields: CustomFormIF[] = [
    {
      feedbackMessage: 'Fine!',
      grids: {
        xxl: '6',
        xl: '6',
        lg: '6',
        md: '6',
        sm: '12',
      },
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      feedbackMessage: 'Fine!',
      grids: {
        xxl: '6',
        xl: '6',
        lg: '6',
        md: '6',
        sm: '12',
      },
      id: 'password',
      name: 'password',
      label: 'Password',
      type: 'Password',
    },
  ]

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  })

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmitCredentials}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <CustomForm
          formFields={formFields}
          handleSubmit={handleSubmit}
          submitText="Send"
          handleChange={handleChange}
          values={values}
          errors={errors}
          touched={touched}
        />
      )}
    </Formik>
  )
}

export default Login
