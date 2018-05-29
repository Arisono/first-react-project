import  React from  'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
  /**
   * created by aisonos at 2018/5/29
   */
class SiginForm extends  React.Component{

    render(){
        var styleObj = {
            border:"2px solid #f4f4f4",
            fontWeight:"normal"
        }
        return <div class="container">

         <div class="row">
             <div class="col-md-4"></div>
             <div class="col-md-4">
                 <form class="form-horizontal" style={styleObj}>
                     <fieldset>
                         <div id="legend" class="" style={{margin:"20px 25px 25px 20px"}}>
                             <legend class="" style={{marginBottom:"10px",color:"blue"}}>表单名</legend>
                         </div>


                         <div class="control-group" >


                             <label class="control-label col-xs-2" for="input01" >手机</label>
                             <div class="controls col-xs-10">
                                 <input type="text" placeholder="" class="input-xlarge" />
                                 <p class="help-block"></p>
                             </div>
                         </div><div class="control-group">


                         <label class="control-label col-xs-2" for="input01">密码</label>
                         <div class="controls col-xs-10">
                             <input type="text" placeholder="" class="input-xlarge"/>
                             <p class="help-block"></p>
                         </div>
                     </div>





                         <div class="control-group">


                             <label class="control-label col-xs-2" for="input01">时间</label>
                             <div class="controls col-xs-10">
                                 <input type="text" placeholder="" class="input-xlarge"/>
                                 <p class="help-block"></p>
                             </div>
                         </div>

                         <div class="control-group">
                             <label class="control-label col-xs-2"></label>


                             <div class="controls col-xs-10">
                                 <button class="btn btn-info " style={{marginBottom:"20px",marginTop:"10px"}}>提交</button>
                             </div>
                         </div>

                     </fieldset>
                 </form>
             </div>
             <div class="col-md-4"></div>
         </div>

        </div>
    }

}

export  default  SiginForm;