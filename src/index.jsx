import React from 'react'
import cx from 'classnames'
import Down from './down'
import Up from './up'
import Mute from './mute'
import Line from './line'
import Dot from './dot'
import Palm from './palm'
import { settings } from './settings'

const { thinLine, thickLine } = settings

const strummingComponents = {
  D: ({ index, width, xCenter }) => <Down width={width} key={index} xCenter={xCenter} />,
  d: ({ index, width, xCenter }) => <Down width={width} key={index} xCenter={xCenter} isSmall />,
  U: ({ index, width, xCenter }) => <Up width={width} key={index} xCenter={xCenter} />,
  u: ({ index, width, xCenter }) => <Up width={width} key={index} xCenter={xCenter} isSmall />,
  x: ({ index, xCenter }) => <Mute key={index} xCenter={xCenter} />,
  '-': ({ index, xCenter }) => <Line key={index} xCenter={xCenter} />,
  '.': ({ index, xCenter, isSquared }) => <Dot key={index} xCenter={xCenter} isSquared={isSquared} />,
  p: ({ index, xCenter, isSquared }) => <Palm key={index} xCenter={xCenter} isSquared={isSquared} />
}

const Strumming = ({ isSquared = false, isThick = false, name, pattern, shuffle = false }) => {
  if (!pattern) return null

  const lineThick = !isThick ? thinLine : thickLine
  const viewBox = {
    height: 100 + lineThick,
    width: 400,
    x: -lineThick / 2,
    y: -lineThick / 2
  }
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

    patternSanitized.split('').forEach((strummingKey, index) => {
      const component = strummingComponents[strummingKey]
      let xCenter = (width * index) + (width / 2) - (lineThick / 2)

      if (hasShuffleDeflect(index, strummingKey)) {
        xCenter += shuffleDeflect
      }

      component && components.push(
        component({ index, width, xCenter, isSquared })
      )
    })

    return components
  }

  const className = cx('Strumming', {
    'Strumming--squared': isSquared,
    'Strumming--thick': isThick
  })

  return (
    <svg className={className} viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
      {getComponents()}
    </svg>
  )
}

export default React.memo(Strumming)
