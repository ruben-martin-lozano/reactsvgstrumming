import React from 'react'
import PropTypes from 'prop-types'

const Name = ({ name, xBase, yBase }) => (
  <text
    className='sb-StrummingName'
    textAnchor='middle'
    x={xBase}
    y={yBase - 20}
  >
    {name}
  </text>
)

Name.propTypes = {
  name: PropTypes.string.isRequired,
  xBase: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Name
