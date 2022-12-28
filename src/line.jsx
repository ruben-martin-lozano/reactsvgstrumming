import React from 'react'

const Line = ({ xCenter }) => (
  <line x1={xCenter - 7} y1={50} x2={xCenter + 7} y2={50} />
)

export default React.memo(Line)
