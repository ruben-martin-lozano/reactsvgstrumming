import React, {Fragment} from 'react'

const Mute = ({ xCenter }) => (
  <Fragment>
    <line x1={xCenter - 10} y1={40} x2={xCenter + 10} y2={60} />
    <line x1={xCenter - 10} y1={60} x2={xCenter + 10} y2={40} />
  </Fragment>
)

export default React.memo(Mute)
