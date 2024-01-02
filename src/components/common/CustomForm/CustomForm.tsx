import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { FormikErrors, FormikTouched } from 'formik'
import CustomFormField from './CustomFormField'
import { CustomFormIF } from './models'
import { CommonObject } from '../../../types/common'

/* eslint-disable no-unused-vars */
interface CustomFormPropsIF {
  formFields: CustomFormIF[]
  submitText: string
  values: any
  touched: FormikTouched<CommonObject>
  errors: FormikErrors<CommonObject>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChange: (e: React.ChangeEvent<any>) => void
}

/* eslint-enable no-unused-vars */

const CustomForm = (props: CustomFormPropsIF) => {
  return (
    <Form onSubmit={props.handleSubmit} noValidate>
      <Row className="mb-3">
        {props.formFields.map((formField) => {
          return (
            <CustomFormField
              key={formField.name}
              formField={formField}
              handleChange={props.handleChange}
              value={props.values[formField.name]}
              isValid={
                props.touched[formField.name] && !props.errors[formField.name]
              }
              isInvalid={!!props.errors[formField.name]}
              error={props.errors[formField.name] as string}
            />
          )
        })}
      </Row>

      <div className="form-footer">
        <Button type="submit" variant="primary">
          {props.submitText}
        </Button>
      </div>
    </Form>
  )
}

export default CustomForm
