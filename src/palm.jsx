import React from 'react'

const Palm = ({ xCenter, isSquared }) => {
  const className = 'StrummingPalm'

  return (
    !isSquared
      ? <circle className={className} cx={xCenter} cy={50} />
      : <rect className={className} x={xCenter - 12.5} y={37.5} height={25} width={25} />
  )
}

export default React.memo(Palm)
