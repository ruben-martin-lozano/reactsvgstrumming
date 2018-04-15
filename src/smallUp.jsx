import React from 'react'
import PropTypes from 'prop-types'

const Up = ({ color, lineThick }) => (
  <g>
    <line stroke={color} x1={'20'} y1={'20'} x2={'20'} y2={'80'} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={'20'} y1={'20'} x2={'5'} y2={'35'} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={'20'} y1={'20'} x2={'35'} y2={'35'} strokeWidth={lineThick} strokeLinecap='round' />
  </g>
)

Up.propTypes = {
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired
}

export default Up
