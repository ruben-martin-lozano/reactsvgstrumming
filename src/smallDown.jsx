import React from 'react'
import PropTypes from 'prop-types'

const SmallDown = ({ color, centerX, lineThick }) => (
  <g>
    <line stroke={color} x1={centerX} y1={'20'} x2={centerX} y2={'80'} strokeWidth={lineThick} strokeLinecap='round' />
    <polyline stroke={color} points={`${centerX - 15},65 ${centerX},80 ${centerX + 15},65`} fill='none' strokeWidth={lineThick} strokeLinejoin='round' strokeLinecap='round' />
  </g>
)

SmallDown.propTypes = {
  centerX: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired
}

export default SmallDown
