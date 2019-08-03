import React from 'react'
import PropTypes from 'prop-types'

const Dot = ({ xCenter, lineThick, yBase }) => (
  <circle className='StrummingDot' fill='#000000' stroke='none' cx={xCenter} cy={yBase + 50} r={lineThick} />
)

Dot.propTypes = {
  lineThick: PropTypes.number.isRequired,
  xCenter: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Dot
