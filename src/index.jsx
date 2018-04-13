import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const StrummingPattern = ({ inverse }) => {
  const baseClassName = cx('sb-StrummingPattern', {
    'sb-StrummingPattern--inverse': inverse
  })

  return (
    <h1 className={baseClassName}>Hello World</h1>
  )
}

StrummingPattern.propTypes = {
  inverse: PropTypes.bool
}

StrummingPattern.defaultProps = {
  inverse: false
}

export default StrummingPattern
