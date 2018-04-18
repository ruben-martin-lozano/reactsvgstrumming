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
const chordNameHeight = 41
const yBase = chordNameHeight
const viewBox = {
  height: 100 + lineThick + chordNameHeight,
  width: 400,
  x: -lineThick / 2,
  y: -lineThick / 2
}

const Strumming = ({ colors, inverse, name, pattern, shuffle }) => {
  if (!name || !pattern) return null

  const baseClassName = cx('sb-Strumming', {
    'sb-Strumming--inverse': inverse
  })

  const patternSanitized = pattern.replace(/\s/g, '')
  const width = viewBox.width / patternSanitized.length

  const getComponents = () => {
    const components = []
    const shuffleDeflect = (width / 2) - (lineThick / 2)
    const hasShuffleDeflect = (index, strummingKey) => {
      return shuffle && (index % 2) !== 0 &&
        strummingKey.toLowerCase() === 'u' &&
        patternSanitized.charAt(index + 1).toLowerCase() === 'd'
    }

    patternSanitized.split('').map((strummingKey, index) => {
      const component = strummingComponents[strummingKey]
      let xCenter = (width * index) + (width / 2) - (lineThick / 2)

      if (hasShuffleDeflect(index, strummingKey)) {
        xCenter += shuffleDeflect
      }

      component && components.push(
        component(width, colors.simbols, index, xCenter)
      )
    })

    return components
  }

  return (
    <svg className={baseClassName} viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
      <Name color={colors.strummingName} name={name} xBase={viewBox.width / 2} yBase={yBase} />
      {getComponents()}
    </svg>
  )
}

Strumming.propTypes = {
  colors: PropTypes.shape({
    simbols: PropTypes.string.isRequired,
    strummingName: PropTypes.string.isRequired
  }),
  inverse: PropTypes.bool,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  shuffle: PropTypes.bool
}

Strumming.defaultProps = {
  colors: {
    simbols: '#000000',
    strummingName: '#000000'
  },
  inverse: false,
  shuffle: false
}

export default Strumming
