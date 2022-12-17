import React, {Fragment} from 'react'

const Arrow = ({ xCenter, lineThick, points, yStart, yEnd }) => {
  return (
    <Fragment>
      <line stroke='#000000' x1={xCenter} y1={yStart} x2={xCenter} y2={yEnd} strokeWidth={lineThick} strokeLinecap='round' />
      <polyline stroke='#000000' points={points} fill='none' strokeWidth={lineThick} strokeLinejoin='round' strokeLinecap='round' />
    </Fragment>
  )
}

export default Arrow
