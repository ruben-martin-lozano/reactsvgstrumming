import React from 'react'
import PropTypes from 'prop-types'

const SmallDown = ({ color, centerX, lineThick }) => (
  <g>
    <line stroke={color} x1={centerX} y1={'20'} x2={centerX} y2={'80'} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={centerX} y1={'80'} x2={centerX - 15} y2={'65'} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={centerX} y1={'80'} x2={centerX + 15} y2={'65'} strokeWidth={lineThick} strokeLinecap='round' />
  </g>
)

SmallDown.propTypes = {
  centerX: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired
}

export default SmallDown
