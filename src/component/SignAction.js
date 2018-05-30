import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * Created by Arison on 2018/5/29.
 */
class SignAction extends React.Component {

    render() {
        return <div class="container">
           <div class="row"></div>
           <div class="row">
               <div class="col-md-3"></div>
               <div class="col-md-12">
                   <form class="form-horizontal">
                       <fieldset>
                           <div id="legend" class="">
                               <legend class="page-header">在线保存</legend>
                           </div>


                           <div class="control-group">
                               <label class="col-sm-1 control-label" for="input01">手机号</label>
                               <div class="controls col-sm-11">
                                   <input type="text" placeholder="" class="input-xlarge"/>
                                   <p class="help-block"></p>
                               </div>
                           </div>

                           <div class="control-group">

                               <label class="col-sm-1 control-label" for="input01">密码</label>
                               <div class="controls col-sm-11">
                                   <input type="text" placeholder="" class="input-xlarge"/>
                                   <p class="help-block"></p>
                               </div>
                           </div>
                           <div class="control-group">

                               <label class="control-label col-sm-1" for="input01">时间</label>
                               <div class="controls col-sm-11">
                                   <input type="text" placeholder="2018-08-08 08:00:00" class="input-xlarge"/>
                                   <p class="help-block">注意时间格式</p>
                               </div>
                           </div>


                           <div class="control-group">
                               <label class="control-label col-sm-1"></label>

                               <div class="controls col-sm-11">
                                   <button class="btn btn-success">提交</button>
                               </div>
                           </div>

                       </fieldset>
                   </form>
               </div>
               <div class="col-md-3"></div>
           </div>
        </div>
    }
    }

    export default SignAction;