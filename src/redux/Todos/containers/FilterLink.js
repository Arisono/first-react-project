/**
 * Created by Arison on 2018/8/30.
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
    console.log("FilterLink state:"+JSON.stringify(state));
    console.log("mapStateToProps:"+JSON.stringify(ownProps));
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
     console.log("mapDispatchToProps:"+JSON.stringify(ownProps));
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
