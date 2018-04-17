import React from 'react'
import PropTypes from 'prop-types'

const Line = ({ xCenter, color, lineThick }) => (
  <g>
    <line stroke={color} x1={xCenter - 7} y1={'50'} x2={xCenter + 7} y2={'50'} strokeWidth={lineThick} strokeLinecap='round' />
  </g>
)

Line.propTypes = {
  xCenter: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired
}

export default Line
