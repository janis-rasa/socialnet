// import { BooleanSchema, MixedSchema, NumberSchema, StringSchema } from 'Yup'

// export type YupSchemaType =
//   | MixedSchema
//   | StringSchema
//   | NumberSchema
//   | BooleanSchema

export type CustomFormIF = {
  grids: {
    xxl: string
    xl: string
    lg: string
    md: string
    sm: string
  }
  type: string
  name: string
  label: string
  feedbackMessage: string
  id: string
  // yupObject: YupSchemaType
  // eslint-disable-next-line no-unused-vars
  // handleChange: (event: React.SyntheticEvent) => void
}
