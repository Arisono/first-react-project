import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick,completed,text  }) => (
  <div>
      <li onClick={onClick}
      style={{textDecoration:completed?'line-through':'none'}}>
          {text}
      </li>
  </div>
)


//onClick: PropTypes.func.isRequired,
//completed: PropTypes.bool.isRequired,
// text: PropTypes.string.isRequired
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo