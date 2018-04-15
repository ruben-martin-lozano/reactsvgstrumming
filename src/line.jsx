import React from 'react'
import PropTypes from 'prop-types'

const Line = ({ color, lineThick }) => (
  <g>
    <line stroke={color} x1={'5'} y1={'50'} x2={'35'} y2={'50'} strokeWidth={lineThick} strokeLinecap='round' />
  </g>
)

Line.propTypes = {
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired
}

export default Line
