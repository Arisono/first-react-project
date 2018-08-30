/**
 * Created by Arison on 2018/8/29.
 */
import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "../components/Footer";


//声明一个无状态组件
const AddTodo = ({dispatch}) => {
    let input

    return (
        <div>
            <form className="form-inline" style={{padding:'10px'}} onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }

                dispatch(addTodo(input.value))
                input.value = ''
            }}>

                <input className="form-control" style={{display:'inline',marginRight:'10px'}}  ref={node => input = node}></input>
                <button type="submit"  style={{display:'inline',marginRight:'10px'}} className="btn btn-sm btn-info" >
                    Add Todo
                </button>
                <Footer />
            </form>

        </div>
    )
}


export default connect()(AddTodo)