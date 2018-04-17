import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Down from './down'
import Up from './up'
import Mute from './mute'
import Line from './line'
// import Name from './name'

const lineThick = 4
// const xCenterDeflect = 20 + (lineThick / 2)
// const xCenterDeflect = 0

const strummingComponents = {
  'D': (width, color, index, xCenter) => <Down color={color} width={width} position={index} lineThick={lineThick} key={index} xCenter={xCenter} />,
  'd': (width, color, index, xCenter) => <Down color={color} width={width} position={index} lineThick={lineThick} key={index} xCenter={xCenter} isSmall />,
  'U': (width, color, index, xCenter) => <Up color={color} width={width} position={index} lineThick={lineThick} key={index} xCenter={xCenter} />,
  'u': (width, color, index, xCenter) => <Up color={color} width={width} position={index} lineThick={lineThick} key={index} xCenter={xCenter} isSmall />,
  'x': (width, color, index, xCenter) => <Mute color={color} width={width} lineThick={lineThick} key={index} xCenter={xCenter} />,
  '-': (width, color, index, xCenter) => <Line color={color} width={width} lineThick={lineThick} key={index} xCenter={xCenter} />
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

  // <Name color={color} name={name} />
  return (
    <svg className={baseClassName} viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
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
