/**
 * Created by Arison on 2018/8/29.
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

        default :

            return state
    }
}


export default todos

