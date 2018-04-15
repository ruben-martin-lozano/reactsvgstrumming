import React from 'react'
import PropTypes from 'prop-types'

const Mute = ({ color, lineThick }) => (
  <g>
    <line stroke={color} x1={'5'} y1={'35'} x2={'35'} y2={'65'} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={'5'} y1={'65'} x2={'35'} y2={'35'} strokeWidth={lineThick} strokeLinecap='round' />
  </g>
)

Mute.propTypes = {
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired
}

export default Mute
