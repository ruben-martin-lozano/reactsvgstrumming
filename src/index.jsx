import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Down from './down'
import Up from './up'
import Mute from './mute'
import Line from './line'
import Name from './name'

const lineThick = 4
const strummingComponents = {
  'D': (width, color, index, xCenter) => <Down color={color} width={width} position={index} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} />,
  'd': (width, color, index, xCenter) => <Down color={color} width={width} position={index} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} isSmall />,
  'U': (width, color, index, xCenter) => <Up color={color} width={width} position={index} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} />,
  'u': (width, color, index, xCenter) => <Up color={color} width={width} position={index} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} isSmall />,
  'x': (width, color, index, xCenter) => <Mute color={color} width={width} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} />,
  '-': (width, color, index, xCenter) => <Line color={color} width={width} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} />
}
const chordNameHeight = 45
const yBase = chordNameHeight
const viewBox = {
  height: 100 + lineThick + chordNameHeight,
  width: 400,
  x: -lineThick / 2,
  y: -lineThick / 2
}

const Strumming = ({ color, inverse, name, pattern, shuffle }) => {
  if (!name || !pattern) return null

  const baseClassName = cx('sb-Strumming', {
    'sb-Strumming--inverse': inverse
  })

  const patternSanitized = pattern.replace(/\s/g, '')
  const width = viewBox.width / patternSanitized.length

  const getComponents = () => {
    const components = []

    patternSanitized.split('').map((strummingKey, index) => {
      const component = strummingComponents[strummingKey]
      const xCenter = (width * index) + (width / 2) - (lineThick / 2)

      component && components.push(
        component(width, color, index, xCenter)
      )
    })

    return components
  }

  return (
    <svg className={baseClassName} viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
      <Name color={color} name={name} xBase={viewBox.width / 2} yBase={yBase} />
      {getComponents()}
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
