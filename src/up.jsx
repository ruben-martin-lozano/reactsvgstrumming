import React from 'react'
import PropTypes from 'prop-types'

const Up = ({ color, centerX, lineThick }) => (
  <g>
    <line stroke={color} x1={centerX} y1={'0'} x2={centerX} y2={'100'} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={centerX} y1={'0'} x2={centerX - 20} y2={'20'} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={centerX} y1={'0'} x2={centerX + 20} y2={'20'} strokeWidth={lineThick} strokeLinecap='round' />
  </g>
)

Up.propTypes = {
  centerX: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired
}

export default Up
