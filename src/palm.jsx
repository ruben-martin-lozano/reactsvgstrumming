import React from 'react'
import PropTypes from 'prop-types'

const Palm = ({ xCenter, lineThick, yBase }) => (
  <circle fill='none' stroke='#000000' cx={xCenter} cy={yBase + 50} r={lineThick * 2} strokeWidth={lineThick} />
)

Palm.propTypes = {
  lineThick: PropTypes.number.isRequired,
  xCenter: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Palm
