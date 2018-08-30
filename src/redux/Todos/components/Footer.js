/**
 * Created by Arison on 2018/8/30.
 */
import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
    <div style={{display:'inline',marginRight:'10px'}}>
        <span>Show: </span>
        {/*向子组件传入属性*/}
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </div>
)

export default Footer
