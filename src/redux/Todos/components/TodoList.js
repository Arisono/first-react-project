/**
 * Created by Arison on 2018/8/29.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Todo from "./Todo";

const TodoList = ({todos, toggleTodo}) => (
    <ul>{
        todos.map(todo =>
            <Todo key={todo.id}  {...todo}
                  onClick={() => toggleTodo(todo.id)}
            />
        )
    }
    </ul>
)


//onClick: PropTypes.func.isRequired,
//completed: PropTypes.bool.isRequired,
// text: PropTypes.string.isRequired
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList