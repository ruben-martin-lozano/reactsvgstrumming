import React from 'react'
import PropTypes from 'prop-types'

const Arrow = ({ color, centerX, lineThick, points, yStart, yEnd }) => (
  <g>
    <line stroke={color} x1={centerX} y1={yStart} x2={centerX} y2={yEnd} strokeWidth={lineThick} strokeLinecap='round' />
    <polyline stroke={color} points={points} fill='none' strokeWidth={lineThick} strokeLinejoin='round' strokeLinecap='round' />
  </g>
)

Arrow.propTypes = {
  centerX: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  lineThick: PropTypes.number.isRequired,
  points: PropTypes.string.isRequired,
  yStart: PropTypes.number.isRequired,
  yEnd: PropTypes.number.isRequired
}

export default Arrow
