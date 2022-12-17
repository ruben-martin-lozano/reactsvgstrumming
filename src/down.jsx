import React from 'react'
import Arrow from './arrow'

const Down = ({ isSmall = false, lineThick, position, width, xCenter, yBase }) => {
  const yStart = !isSmall ? yBase : yBase + 20
  const yEnd = !isSmall ? yBase + 100 : yBase + 80
  const yDeflect = !isSmall ? yBase + 80 : yBase + 65
  const xDeflect = width > 45 ? (!isSmall ? 20 : 15) : width / 3
  const points = `${xCenter - xDeflect},${yDeflect} ${xCenter},${yEnd} ${xCenter + xDeflect},${yDeflect}`

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

export default Down
