import React from 'react'

const Arrow = ({ xCenter, points, yStart, yEnd }) => {
  return (
    <>
      <line x1={xCenter} y1={yStart} x2={xCenter} y2={yEnd} />
      <polyline points={points} />
    </>
  )
}

export default Arrow
