import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo,VisibilityFilters} from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

// const mapStateToProps = state => ({
//
//   todos:state.todos
// })

const mapStateToProps = state => {
    console.log("visibleTodoList  state:"+JSON.stringify(state));
    return {
        todos:getVisibleTodos(state.todos,state.visibilityFilter),
        todoNum:state.todoNum
    }
}

const mapDispatchToProps = dispatch => ({
   toggleTodo:id=>dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
