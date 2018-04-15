import React from 'react'
import PropTypes from 'prop-types'

const SmallDown = ({ color, lineThick }) => (
  <g>
    <line stroke={color} x1={'20'} y1={'20'} x2={'20'} y2={'80'} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={'20'} y1={'80'} x2={'5'} y2={'65'} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={'20'} y1={'80'} x2={'35'} y2={'65'} strokeWidth={lineThick} strokeLinecap='round' />
  </g>
)

SmallDown.propTypes = {
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired
}

export default SmallDown
