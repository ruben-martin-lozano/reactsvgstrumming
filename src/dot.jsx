import React from 'react'

const Dot = ({ xCenter, lineThick, yBase }) => (
  <circle className='StrummingDot' fill='#000000' stroke='none' cx={xCenter} cy={yBase + 50} r={lineThick} />
)

export default Dot
