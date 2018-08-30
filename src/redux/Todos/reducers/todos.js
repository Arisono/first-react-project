// import {toggleTodo,addTodo} from '../actions'

/**
 * Created by Arison on 2018/8/29.
 *
 */
const todos=(state=[],action)=>{

    switch (action.type){
        case 'ADD_TODO':

            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]

        case 'TOGGLE_TODO':
               console.log("todo reducers state:"+JSON.stringify(state));
               console.log("todo reducers action:"+JSON.stringify(action));
            return   state.map(todo=>(
                 todo.id===action.id
            )?{...todo,completed:!todo.completed}:todo)

        default :

            return state
    }
}


export default todos

