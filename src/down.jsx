import React from 'react'
import PropTypes from 'prop-types'

const Down = ({ color, lineThick }) => (
  <g>
    <line stroke={color} x1={'20'} y1={'0'} x2={'20'} y2={'100'} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={'20'} y1={'100'} x2={'0'} y2={'80'} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={'20'} y1={'100'} x2={'40'} y2={'80'} strokeWidth={lineThick} strokeLinecap='round' />
  </g>
)

Down.propTypes = {
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired
}

export default Down
