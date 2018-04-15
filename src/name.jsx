import React from 'react'
import PropTypes from 'prop-types'

const Name = ({ color, name }) => (
  <text
    textAnchor='middle'
    x={0}
    y={0}
    fill={color}
  >
    {name}
  </text>
)

Name.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Name
