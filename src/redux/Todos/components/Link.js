/**
 * Created by Arison on 2018/8/30.
 */
import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Link = ({  active, children, onClick }) => {
    console.log("Link active:"+active+"  children:"+children);

    return(
        <button
            onClick={onClick}
            disabled={active}
            type="button"
             className="btn-sm"
            style={{
                marginLeft: '4px',
                color:active==true?'#ffffff':'green',
                background:active==true?'gray':'#ffffff'
            }}>

            {children+':'+active}
        </button>
    )
}


//onClick: PropTypes.func.isRequired,
//completed: PropTypes.bool.isRequired,
// text: PropTypes.string.isRequired
Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link