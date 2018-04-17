import React from 'react'
import PropTypes from 'prop-types'

const Line = ({ centerX, color, lineThick }) => (
  <g>
    <line stroke={color} x1={centerX - 7} y1={'50'} x2={centerX + 7} y2={'50'} strokeWidth={lineThick} strokeLinecap='round' />
  </g>
)

Line.propTypes = {
  centerX: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired
}

export default Line
