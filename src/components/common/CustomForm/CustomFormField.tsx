import React from 'react'
import { Col, Form } from 'react-bootstrap'
import { CustomFormIF } from './models'

interface CustomFormFieldProps {
  formField: CustomFormIF
  value: any
  isValid?: boolean
  isInvalid?: boolean
  error?: string
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: React.SyntheticEvent) => void
}

const CustomFormField = ({
  formField: { grids, type, name, feedbackMessage, id, label },
  handleChange,
  isValid,
  isInvalid,
  error,
  value,
}: CustomFormFieldProps) => {
  return (
    <Form.Group
      as={Col}
      controlId={id}
      xxl={grids.xxl}
      xl={grids.xl}
      lg={grids.lg}
      md={grids.md}
      sm={grids.sm}
    >
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        isValid={isValid}
        isInvalid={isInvalid}
      />
      <Form.Control.Feedback>{feedbackMessage}</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  )
}

export default CustomFormField
