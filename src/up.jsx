import React from 'react'
import PropTypes from 'prop-types'
import Arrow from './arrow'

const Up = ({ isSmall, lineThick, position, width, xCenter, yBase }) => {
  const yStart = !isSmall ? yBase : yBase + 20
  const yEnd = !isSmall ? yBase + 100 : yBase + 80
  const yDeflect = !isSmall ? yBase + 20 : yBase + 35
  const xDeflect = width > 45 ? (!isSmall ? 20 : 15) : width / 3
  const points = `${xCenter - xDeflect},${yDeflect} ${xCenter},${yStart} ${xCenter + xDeflect},${yDeflect}`

  return (
    <Arrow
      xCenter={xCenter}
      lineThick={lineThick}
      points={points}
      yStart={yStart}
      yEnd={yEnd}
    />
  )
}

Up.defaultProps = {
  isSmall: false
}

Up.propTypes = {
  isSmall: PropTypes.bool,
  lineThick: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  xCenter: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Up
