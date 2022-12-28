import React from 'react'

const Dot = ({ xCenter, isSquared }) => {
  const className = 'StrummingDot'

  return (
    !isSquared
      ? <circle className={className} cx={xCenter} cy={50} />
      : <rect className={className} x={xCenter - 5} y={45} height={10} width={10} />
  )
}

export default React.memo(Dot)
