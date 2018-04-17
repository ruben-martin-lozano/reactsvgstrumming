import React from 'react'
import PropTypes from 'prop-types'

const Line = ({ xCenter, color, lineThick, yBase }) => (
  <g>
    <line stroke={color} x1={xCenter - 7} y1={yBase + 50} x2={xCenter + 7} y2={yBase + 50} strokeWidth={lineThick} strokeLinecap='round' />
  </g>
)

Line.propTypes = {
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired,
  xCenter: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Line
