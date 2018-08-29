/**
 * Created by Arison on 2018/8/29.
 */
import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'


//声明一个组件
const AddTodo = ({dispatch}) => {
    let input


    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }

                dispatch(addTodo(input.value))
                input.value = ''
            }}>

                <input ref={node => input = node}></input>
                <button type="submit">
                    Add Todo
                </button>
            </form>

        </div>
    )
}


export default connect()(AddTodo)