import React, {Fragment} from 'react'

const Mute = ({ xCenter, lineThick, yBase }) => (
  <Fragment>
    <line stroke='#000000' x1={xCenter - 10} y1={yBase + 40} x2={xCenter + 10} y2={yBase + 60} strokeWidth={lineThick} strokeLinecap='round' />
    <line stroke='#000000' x1={xCenter - 10} y1={yBase + 60} x2={xCenter + 10} y2={yBase + 40} strokeWidth={lineThick} strokeLinecap='round' />
  </Fragment>
)

export default Mute
