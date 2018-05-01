import React from 'react'
import PropTypes from 'prop-types'

const Name = ({ name }) => (
  <strong className='sb-StrummingName'>
    {name}
  </strong>
)

Name.propTypes = {
  name: PropTypes.string.isRequired
}

export default Name
