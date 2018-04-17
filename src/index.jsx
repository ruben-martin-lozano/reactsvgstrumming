import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Down from './down'
import Up from './up'
import Mute from './mute'
import Line from './line'
// import Name from './name'

const lineThick = 4
const centerXDeflect = 20 + (lineThick / 2)

const strummingComponents = {
  'D': (centerX, color, index) => <Down color={color} centerX={(centerX * index) + centerXDeflect} lineThick={lineThick} key={index} />,
  'd': (centerX, color, index) => <Down color={color} isSmall centerX={(centerX * index) + centerXDeflect} lineThick={lineThick} key={index} />,
  'U': (centerX, color, index) => <Up centerX={(centerX * index) + centerXDeflect} color={color} lineThick={lineThick} key={index} />,
  'u': (centerX, color, index) => <Up color={color} isSmall centerX={(centerX * index) + centerXDeflect} lineThick={lineThick} key={index} />,
  'x': (centerX, color, index) => <Mute color={color} centerX={(centerX * index) + centerXDeflect} lineThick={lineThick} key={index} />,
  '-': (centerX, color, index) => <Line color={color} centerX={(centerX * index) + centerXDeflect} lineThick={lineThick} key={index} />
}

// const chordNameHeight = 55
const viewBox = {
  height: 100 + lineThick,
  width: 400,
  x: -lineThick / 2,
  y: -lineThick / 2
}

const Strumming = ({ color, inverse, name, pattern, shuffle }) => {
  if (!name || !pattern) return null

  const baseClassName = cx('sb-Strumming', {
    'sb-Strumming--inverse': inverse
  })

  const centerX = (400 / (pattern.replace(/\s/g, '').length))

  let strummings = pattern.replace(/\s/g, '').split('').map((strummingKey, index) => strummingComponents[strummingKey] && strummingComponents[strummingKey](centerX, color, index))

  // <Name color={color} name={name} />
  return (
    <svg className={baseClassName} viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
      {strummings}
    </svg>
  )
}

Strumming.propTypes = {
  color: PropTypes.string,
  inverse: PropTypes.bool,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  shuffle: PropTypes.bool
}

Strumming.defaultProps = {
  color: '#000000',
  inverse: false,
  shuffle: false
}

export default Strumming
