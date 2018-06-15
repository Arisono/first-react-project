/**
 * Created by Arison on 2018/6/15.
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sortable from 'sortablejs'
/**
 * Created by Arison on 2018/6/15.
 */
class SortableExample extends React.Component{
       constructor(props){
        super(props);
    }
    render(){


        return <div>
            <ul id="items">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </div>;
    }
}

export  default SortableExample;