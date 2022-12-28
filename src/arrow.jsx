import React, {Fragment} from 'react'

const Arrow = ({ xCenter, points, yStart, yEnd }) => {
  return (
    <Fragment>
      <line x1={xCenter} y1={yStart} x2={xCenter} y2={yEnd} />
      <polyline points={points} />
    </Fragment>
  )
}

export default Arrow
