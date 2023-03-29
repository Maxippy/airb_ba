import React, { memo } from 'react'
import styleStrToObject from './utils'

const IconArrowRight = memo((props) => {
  const { width = "12", height = "12" } = props
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={styleStrToObject(`display: block; fill: none; height: ${height}px; width: ${width}px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;`)}><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg>
  )
})

export default IconArrowRight