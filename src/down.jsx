import React from 'react'
import PropTypes from 'prop-types'
import Arrow from './arrow'

const Down = ({ color, centerX, isSmall, lineThick }) => {
  const yStart = !isSmall ? 0 : 20
  const yEnd = !isSmall ? 100 : 80
  const yDeflect = !isSmall ? 80 : 65
  const xDeflect = !isSmall ? 20 : 15
  const points = `${centerX - xDeflect},${yDeflect} ${centerX},${yEnd} ${centerX + xDeflect},${yDeflect}`

  return (
    <Arrow
      centerX={centerX}
      color={color}
      lineThick={lineThick}
      points={points}
      yStart={yStart}
      yEnd={yEnd}
    />
  )
}

Down.defaultProps = {
  isSmall: false
}

Down.propTypes = {
  centerX: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
  lineThick: PropTypes.number.isRequired
}

export default Down
