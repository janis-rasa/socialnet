declare module '*.svg' {
  import React = require('react')

  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  const src: string
  export default src
}

declare module '*.scss' {
  const classes: { [key: string]: string }
  export default classes
}
