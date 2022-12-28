import React from 'react'
import Arrow from './arrow'

const Up = ({ isSmall = false, width, xCenter }) => {
  const yStart = !isSmall ? 5 : 23
  const yEnd = !isSmall ? 100 : 80
  const yDeflect = !isSmall ? 20 : 35
  const xDeflect = width > 45 ? (!isSmall ? 20 : 15) : width / 3
  const points = `${xCenter - xDeflect},${yDeflect} ${xCenter},${yStart} ${xCenter + xDeflect},${yDeflect}`

  return (
    <Arrow
      xCenter={xCenter}
      points={points}
      yStart={yStart + 5}
      yEnd={yEnd}
    />
  )
}

export default React.memo(Up)
