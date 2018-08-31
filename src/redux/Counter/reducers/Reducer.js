/**
 * Created by Arison on 2018/8/28.
 */
import {
    INCREASE,DECREASE,INCREASE10,MULTIPLICATION
} from '../actions/Action';

const changeValue=(state={value:0},action)=>{

    switch (action.type){
        case INCREASE:
            return {...state,value:state.value+1};
        //return {value:state.value+1};//这样写也ok
        case DECREASE:
            return {...state,value:state.value-1};
        case INCREASE10:

            return {value:state.value+10}

        case MULTIPLICATION:

            return {value:state.value*10 }
        default:
            return state;

    }

}

export default  changeValue;