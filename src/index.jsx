import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

let color = '#000000'
let lineThick = 4

const Strumming = ({ inverse, name, pattern, shuffle }) => {
  const baseClassName = cx('sb-Strumming', {
    'sb-Strumming--inverse': inverse
  })

  const down = (
    <g>
      <line stroke={color} x1={'20'} y1={'0'} x2={'20'} y2={'100'} strokeWidth={lineThick} strokeLinecap='round' />
      <line stroke={color} x1={'20'} y1={'100'} x2={'0'} y2={'80'} strokeWidth={lineThick} strokeLinecap='round' />
      <line stroke={color} x1={'20'} y1={'100'} x2={'40'} y2={'80'} strokeWidth={lineThick} strokeLinecap='round' />
    </g>
  )

  const smallDown = (
    <g>
      <line stroke={color} x1={'20'} y1={'20'} x2={'20'} y2={'80'} strokeWidth={lineThick} strokeLinecap='round' />
      <line stroke={color} x1={'20'} y1={'80'} x2={'5'} y2={'65'} strokeWidth={lineThick} strokeLinecap='round' />
      <line stroke={color} x1={'20'} y1={'80'} x2={'35'} y2={'65'} strokeWidth={lineThick} strokeLinecap='round' />
    </g>
  )

  const up = (
    <g>
      <line stroke={color} x1={'20'} y1={'0'} x2={'20'} y2={'100'} strokeWidth={lineThick} strokeLinecap='round' />
      <line stroke={color} x1={'20'} y1={'0'} x2={'0'} y2={'20'} strokeWidth={lineThick} strokeLinecap='round' />
      <line stroke={color} x1={'20'} y1={'0'} x2={'40'} y2={'20'} strokeWidth={lineThick} strokeLinecap='round' />
    </g>
  )

  const smallUp = (
    <g>
      <line stroke={color} x1={'20'} y1={'20'} x2={'20'} y2={'80'} strokeWidth={lineThick} strokeLinecap='round' />
      <line stroke={color} x1={'20'} y1={'20'} x2={'5'} y2={'35'} strokeWidth={lineThick} strokeLinecap='round' />
      <line stroke={color} x1={'20'} y1={'20'} x2={'35'} y2={'35'} strokeWidth={lineThick} strokeLinecap='round' />
    </g>
  )

  const mute = (
    <g>
      <line stroke={color} x1={'5'} y1={'35'} x2={'35'} y2={'65'} strokeWidth={lineThick} strokeLinecap='round' />
      <line stroke={color} x1={'5'} y1={'65'} x2={'35'} y2={'35'} strokeWidth={lineThick} strokeLinecap='round' />
    </g>
  )

  const line = (
    <g>
      <line stroke={color} x1={'5'} y1={'50'} x2={'35'} y2={'50'} strokeWidth={lineThick} strokeLinecap='round' />
    </g>
  )

  const nameComponent = (
    <text
      textAnchor='middle'
      x={0}
      y={0}
      fill={color}
    >
      {name}
      {pattern}
    </text>
  )

  return (
    <svg className={baseClassName} viewBox={'-2 -2 400 104'}>
      {nameComponent}
      {down}
      {smallDown}
      {up}
      {smallUp}
      {mute}
      {line}
    </svg>
  )
}

Strumming.propTypes = {
  inverse: PropTypes.bool,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  shuffle: PropTypes.bool
}

Strumming.defaultProps = {
  inverse: false,
  shuffle: false
}

export default Strumming
