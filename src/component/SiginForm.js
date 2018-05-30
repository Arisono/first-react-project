import  React from  'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  http_axios from  'axios'
import moment from 'moment';
import  Loader from 'react-loader'
/**
   * created by aisonos at 2018/5/29
   */
class SiginForm extends  React.Component{


    constructor(props){
        console.log("constructor()")
        super(props);
        this.state={
            signInfo:"",
            status:"",
            header:"",
            content:"",
            phone:"",
            password:"",
            loaded:true,
            signSuccess:false,
            date:moment().format('YYYY-MM-DD HH:mm:ss')
        }
    }

    componentDidMount(){
        console.log("componmentDidMount()")
        http_axios.get("http://192.168.253.200:8080/unionpay/appConsume").then(res=>{
          console.log("result:"+JSON.stringify(res));
          this.setState({
              loaded:false,
              signInfo:JSON.stringify(res),
              status:res.status,
              header:JSON.stringify(res.headers),
              content:JSON.stringify(res.data)
          })
        }).catch(error=>{
            console.log("error:"+JSON.stringify(error));
        })
    }

      handleChange() {
        console.log(this.refs)
          this.setState({
              phone:this.refs.phone.value,
              password:this.refs.password.value,
              date:this.refs.signDate.value
          })
     }

     handlerSave=(event)=>{
         event.preventDefault();
         if(this.state.phone==""){
             alert("请输入手机号！");
             return
         }
         if(this.state.password==""){
             alert("请输入密码！");
             return
         }
        let url="http://192.168.253.200:8080/sign/"+this.state.phone+"/"+this.state.password+"/"+ this.state.date;
        this.setState({
            loaded:false
        })
         http_axios.post(url)
             .then(res=>{
                 console.log("success")
                  if (res.data.messge.success){
                      alert("签到成功！")
                  }else{
                      alert("签到失败！")
                  }
                 this.setState({
                     loaded:true,
                     signInfo:JSON.stringify(res),
                     status:res.status,
                     header:JSON.stringify(res.headers),
                     content:JSON.stringify(res.data)
                 })
             }).catch(error=>{
             console.log("error")
             alert("签到失败！")
             this.setState({
                 loaded:true,
                 signInfo:JSON.stringify(error),
                 status:error.status,
                 header:JSON.stringify(error.headers),
                 content:JSON.stringify(error.data)
             })
         })


     }

    render(){
        console.log("render()")
        //具有分根线的样式
        var styleObj = {
            marginTop:"10px",
            border:"0px solid #f4f4f4",
            fontWeight:"normal",
            boxShadow:"2px 2px 5px #333333"
        }
        return <div class="container">
         {/*这是注释*/}
            <Loader loaded={this.state.loaded}>
                <div class="row">
                    <div class="col-md-4">   </div>
                    <div className="col-md-4">
                        <form class="form-horizontal" style={styleObj} onChange={this.handleChange.bind(this)}
                              onSubmit={this.handlerSave.bind(this)}>
                            <fieldset>
                                <div id="legend" class="" style={{margin:"20px 25px 25px 20px"}}>
                                    <legend class="" style={{marginBottom:"10px",color:"blue"}}>登录管理系统</legend>
                                </div>

                                <div class="control-group" >
                                    <label class="control-label col-xs-2" for="input01" >手机</label>
                                    <div class="controls col-xs-10">
                                        <input type="text"  ref="phone"  placeholder=""  value={this.state.phone} class="input-xlarge" />
                                        <p class="help-block"></p>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label col-xs-2" for="input01">密码</label>
                                    <div class="controls col-xs-10">
                                        <input type="text" ref="password" placeholder="" value={this.state.password} class="input-xlarge" />
                                        <p class="help-block"></p>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label col-xs-2" for="input01">时间</label>
                                    <div class="controls col-xs-10">
                                        <input type="text" ref="signDate" value={this.state.date} placeholder="" class="input-xlarge"/>
                                        <p class="help-block"></p>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label col-xs-2"></label>
                                    <div class="controls col-xs-10">
                                        <button class="btn btn-info " style={{marginBottom:"20px",marginTop:"10px"}}>提交</button>
                                        {this.state.signSuccess}
                                    </div>
                                </div>

                            </fieldset>
                        </form>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul>
                            <li>状态码：{this.state.status}</li>
                            <li>请求头：{this.state.header}</li>
                            <li>响应体：<span style={{color:"green",fontWeight:"bold"}}>{this.state.content}</span></li>
                            <li>All数据：{this.state.signInfo}</li>
                        </ul>
                    </div>
                </div>
            </Loader>

        </div>
    }
}

export  default  SiginForm;