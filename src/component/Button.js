import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text,onAdd}) => {

  return (
    <button
      onClick={onAdd}
      style={{ backgroundColor: color }}
      className='btn'>
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
  text : 'Click Me'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button