import React from 'react'
import PropTypes from 'prop-types'
import Arrow from './arrow'

const Down = ({ color, isSmall, lineThick, position, width, xCenter }) => {
  const yStart = !isSmall ? 0 : 20
  const yEnd = !isSmall ? 100 : 80
  const yDeflect = !isSmall ? 80 : 65
  const xDeflect = !isSmall ? 20 : 15
  const points = `${xCenter - xDeflect},${yDeflect} ${xCenter},${yEnd} ${xCenter + xDeflect},${yDeflect}`

  return (
    <Arrow
      xCenter={xCenter}
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
  color: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
  lineThick: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  xCenter: PropTypes.number.isRequired
}

export default Down
