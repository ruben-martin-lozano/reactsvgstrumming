import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Down from './down'
import Up from './up'
import Mute from './mute'
import Line from './line'
import Dot from './dot'
import Palm from './palm'
import Name from './name'

const yBase = 0
const strummingComponents = {
  'D': (index, lineThick, width, xCenter) => <Down width={width} position={index} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} />,
  'd': (index, lineThick, width, xCenter) => <Down width={width} position={index} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} isSmall />,
  'U': (index, lineThick, width, xCenter) => <Up width={width} position={index} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} />,
  'u': (index, lineThick, width, xCenter) => <Up width={width} position={index} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} isSmall />,
  'x': (index, lineThick, width, xCenter) => <Mute width={width} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} />,
  '-': (index, lineThick, width, xCenter) => <Line width={width} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} />,
  '.': (index, lineThick, width, xCenter) => <Dot width={width} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} />,
  'p': (index, lineThick, width, xCenter) => <Palm width={width} lineThick={lineThick} key={index} xCenter={xCenter} yBase={yBase} />
}

const Strumming = ({ lineThick, name, pattern, shuffle }) => {
  if (!pattern) return null

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

    patternSanitized.split('').map((strummingKey, index) => {
      const component = strummingComponents[strummingKey]
      let xCenter = (width * index) + (width / 2) - (lineThick / 2)

      if (hasShuffleDeflect(index, strummingKey)) {
        xCenter += shuffleDeflect
      }

      component && components.push(
        component(index, lineThick, width, xCenter)
      )
    })

    return components
  }

  return (
    <Fragment>
      {name && <Name name={name} />}
      <svg className='Strumming' viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
        {getComponents()}
      </svg>
    </Fragment>
  )
}

Strumming.propTypes = {
  lineThick: PropTypes.number,
  name: PropTypes.string,
  pattern: PropTypes.string.isRequired,
  shuffle: PropTypes.bool
}

Strumming.defaultProps = {
  lineThick: 6,
  shuffle: false
}

export default Strumming
