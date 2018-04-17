import React from 'react'
import PropTypes from 'prop-types'

const Name = ({ color, name, xBase, yBase }) => (
  <text
    className='sb-StrummingName'
    textAnchor='middle'
    x={xBase}
    y={yBase - 20}
    fill={color}
  >
    {name}
  </text>
)

Name.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  xBase: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Name
