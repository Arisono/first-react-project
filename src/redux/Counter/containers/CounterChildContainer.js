/**
 * Created by Arison on 2018/8/31.
 */
/**
 * Created by Arison on 2018/8/28.
 */
import {connect} from 'react-redux'
import  CounterChild from '../components/CounterChild'
import {incActionGenerator,decActionGenerator,inc10ActionGenerator,mulActionGenerator} from '../actions/Action';


const mapStateToProps=(state)=>({
        value:state.value
    }
)

const mapDispatchToProps=(dispatch)=>({
    onIncClick:()=>dispatch(incActionGenerator()),
    onDecClick:()=>dispatch(decActionGenerator()),
    onInc10Click:()=>dispatch(inc10ActionGenerator()),
    onMulClick:()=>dispatch(mulActionGenerator())
})


const MyCounterChild=connect(mapStateToProps,mapDispatchToProps)(CounterChild);


export  default  MyCounterChild;