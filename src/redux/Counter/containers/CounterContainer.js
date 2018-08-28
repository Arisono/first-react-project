/**
 * Created by Arison on 2018/8/28.
 */
import {connect} from 'react-redux'
import  Counter from '../components/Counter'
import {incActionGenerator,decActionGenerator,inc10ActionGenerator} from '../actions/Action';


const mapStateToProps=(state)=>({
        value:state.value
    }
)

const mapDispatchToProps=(dispatch)=>({
    onIncClick:()=>dispatch(incActionGenerator()),
    onDecClick:()=>dispatch(decActionGenerator()),
    onInc10Click:()=>dispatch(inc10ActionGenerator())
})


const MyCounterApp=connect(mapStateToProps,mapDispatchToProps)(Counter);


export  default  MyCounterApp;