import React from 'react'

const Line = ({ xCenter, lineThick, yBase }) => (
  <line stroke='#000000' x1={xCenter - 7} y1={yBase + 50} x2={xCenter + 7} y2={yBase + 50} strokeWidth={lineThick} strokeLinecap='round' />
)

export default Line
