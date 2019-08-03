import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const Arrow = ({ xCenter, lineThick, points, yStart, yEnd }) => {
  return (
    <Fragment>
      <line stroke='#000000' x1={xCenter} y1={yStart} x2={xCenter} y2={yEnd} strokeWidth={lineThick} strokeLinecap='round' />
      <polyline stroke='#000000' points={points} fill='none' strokeWidth={lineThick} strokeLinejoin='round' strokeLinecap='round' />
    </Fragment>
  )
}

Arrow.propTypes = {
  xCenter: PropTypes.number.isRequired,
  lineThick: PropTypes.number.isRequired,
  points: PropTypes.string.isRequired,
  yStart: PropTypes.number.isRequired,
  yEnd: PropTypes.number.isRequired
}

export default Arrow
