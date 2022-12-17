import React from 'react'

const Palm = ({ xCenter, lineThick, yBase }) => (
  <circle fill='none' stroke='#000000' cx={xCenter} cy={yBase + 50} r={lineThick * 2} strokeWidth={lineThick} />
)

export default Palm
