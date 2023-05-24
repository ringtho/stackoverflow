import React from 'react'
import PropTypes from 'prop-types'

export default function Error (props) {
  const { error } = props

  console.log(props)
  return (
        <h2 className="error">{error}</h2>
  )
}

Error.propTypes = {
  error: PropTypes.string
}
