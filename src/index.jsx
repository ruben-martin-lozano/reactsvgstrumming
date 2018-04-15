import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Down from './down'
import SmallDown from './smallDown'
import Up from './up'
import SmallUp from './smallUp'
import Mute from './mute'
import Line from './line'
import Name from './name'

const color = '#000000'
const lineThick = 4

const strummingComponents = {
  'D': (key) => <Down color={color} lineThick={lineThick} key={key} />,
  'd': (key) => <SmallDown color={color} lineThick={lineThick} key={key} />,
  'U': (key) => <Up color={color} lineThick={lineThick} key={key} />,
  'u': (key) => <SmallUp color={color} lineThick={lineThick} key={key} />,
  'x': (key) => <Mute color={color} lineThick={lineThick} key={key} />,
  'X': (key) => <Mute color={color} lineThick={lineThick} key={key} />,
  '-': (key) => <Line color={color} lineThick={lineThick} key={key} />
}

const Strumming = ({ inverse, name, pattern, shuffle }) => {
  if (!name || !pattern) return null

  const baseClassName = cx('sb-Strumming', {
    'sb-Strumming--inverse': inverse
  })

  let strummings = pattern.split('').map((strummingKey, key) => strummingComponents[strummingKey](key))

  return (
    <svg className={baseClassName} viewBox={'-2 -2 400 104'}>
      <Name color={color} name={name} />
      {strummings}
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
