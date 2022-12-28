import React from 'react'
import Arrow from './arrow'

const Down = ({ isSmall = false, width, xCenter }) => {
  const yStart = !isSmall ? 0 : 20
  const yEnd = !isSmall ? 95 : 77
  const yDeflect = !isSmall ? 80 : 65
  const xDeflect = width > 45 ? (!isSmall ? 20 : 15) : width / 3
  const points = `${xCenter - xDeflect},${yDeflect} ${xCenter},${yEnd} ${xCenter + xDeflect},${yDeflect}`

  return (
    <Arrow
      xCenter={xCenter}
      points={points}
      yStart={yStart}
      yEnd={yEnd - 5}
    />
  )
}

export default React.memo(Down)
