import React from 'react'

const Mute = ({ xCenter }) => (
  <>
    <line x1={xCenter - 10} y1={40} x2={xCenter + 10} y2={60} />
    <line x1={xCenter - 10} y1={60} x2={xCenter + 10} y2={40} />
  </>
)

export default Mute
