import React from 'react'
import PropTypes from 'prop-types'

const Mute = ({ color, xCenter, lineThick, yBase }) => (
  <g>
    <line stroke={color} x1={xCenter - 10} y1={yBase + 40} x2={xCenter + 10} y2={yBase + 60} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke={color} x1={xCenter - 10} y1={yBase + 60} x2={xCenter + 10} y2={yBase + 40} strokeWidth={lineThick} strokeLinecap='round' />
  </g>
)

Mute.propTypes = {
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired,
  xCenter: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Mute
