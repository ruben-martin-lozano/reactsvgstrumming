import React from 'react'
import PropTypes from 'prop-types'

// <line stroke={color} x1={'5'} y1={'35'} x2={'35'} y2={'65'} strokeWidth={lineThick} strokeLinecap='round' />
const Mute = ({ color, centerX, lineThick }) => (
  <g>
    <line stroke={color} x1={centerX - 10} y1={'40'} x2={centerX + 10} y2={'60'} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={centerX - 10} y1={'60'} x2={centerX + 10} y2={'40'} strokeWidth={lineThick} strokeLinecap='round' />
  </g>
)

Mute.propTypes = {
  centerX: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired
}

export default Mute
