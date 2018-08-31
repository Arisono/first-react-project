import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Todo = ({onClick, completed,todoNum, text,id}) => (
    <li className="list-group-item" onClick={onClick}
        style={{textDecoration: completed ? 'line-through' : 'none'}}>
        序号<span style={{color:'blue'}}>{id}</span>:{text}
    </li>
)


//onClick: PropTypes.func.isRequired,
//completed: PropTypes.bool.isRequired,
// text: PropTypes.string.isRequired
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    todoNum:PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id:PropTypes.number.isRequired
}

export default Todo