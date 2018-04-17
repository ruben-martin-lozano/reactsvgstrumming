import React from 'react'
import PropTypes from 'prop-types'

const Up = ({ color, centerX, isSmall, lineThick }) => {
  const yStart = !isSmall ? 0 : 20
  const yEnd = !isSmall ? 100 : 80
  const yDeflect = !isSmall ? 20 : 35
  const xDeflect = !isSmall ? 20 : 15
  const points = `${centerX - xDeflect},${yDeflect} ${centerX},${yStart} ${centerX + xDeflect},${yDeflect}`

  return (
    <g>
      <line stroke={color} x1={centerX} y1={yStart} x2={centerX} y2={yEnd} strokeWidth={lineThick} strokeLinecap='round' />
      <polyline stroke={color} points={points} fill='none' strokeWidth={lineThick} strokeLinejoin='round' strokeLinecap='round' />
    </g>
  )
}

Up.defaultProps = {
  isSmall: false
}

Up.propTypes = {
  centerX: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
  lineThick: PropTypes.number.isRequired
}

export default Up
