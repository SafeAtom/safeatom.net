import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ onClick, title }) => (
  <button className="link" type="button" onClick={() => onClick()}>
    {title}
  </button>
)

Link.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
}

export default Link
