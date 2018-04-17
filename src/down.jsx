import React from 'react'
import PropTypes from 'prop-types'

const Down = ({ color, centerX, lineThick }) => (
  <g>
    <line stroke={color} x1={centerX} y1={'0'} x2={centerX} y2={'100'} strokeWidth={lineThick} strokeLinecap='round' />
    <polyline stroke={color} points={`${centerX - 20},80 ${centerX},100 ${centerX + 20},80`} fill='none' strokeWidth={lineThick} strokeLinejoin='round' strokeLinecap='round' />
  </g>
)

Down.propTypes = {
  centerX: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired
}

export default Down
