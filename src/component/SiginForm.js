import  React from  'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  http_axios from  'axios'
import  moment from 'moment';
import  Loader from 'react-loader'

/**
 * created by aisonos at 2018/5/29
 */
class SiginForm extends  React.Component{


    constructor(props){
        console.log("constructor()")
        super(props);
        this.state={
            signList:[],
            signInfo:"",
            status:"",
            header:"",
            content:"",
            phone:"13266699268",
            password:"111111aaa",
            loaded:true,
            signSuccess:false,
            signMessage:"",
            date:moment().format('YYYY-MM-DD HH:mm:ss')
        }
    }

    componentDidMount(){
        console.log("componmentDidMount()")
        let url = "http://47.100.188.105:8080/Chapter/sign/" + this.state.phone + "/" + this.state.password + "/" + moment().format('YYYY-MM-DD');
        this.setState({
            loaded: false
        })

        http_axios.get(url).then(res=>{
            console.log("res:"+JSON.stringify(res))
            this.setState({
                signList:res.data.listdata,
                loaded:true
            })
        }).catch(errors=>{

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
            alert("请输入手机号码!")
            return
        }
        if(this.state.password==""){
            alert("请输入密码!")
            return
        }
        this.getSignInfo();
    }

    getSignInfo() {
        let url = "http://47.100.188.105:8080/Chapter/sign/" + this.state.phone + "/" + this.state.password + "/" + this.state.date;
        this.setState({
            loaded: false
        })
        http_axios.post(url)
            .then(res => {
                console.log("请求结果....."+ JSON.stringify(res))
              if (res.data.messge!=null){
                  if (res.data.messge.success) {
                      console.log("签到成功.....")
                      this.setState({
                          signSuccess: true,
                          signList: res.data.list.listdata,
                          signMessage: "签到成功!"
                      })
                  } else {
                      console.log("签到失败.....")
                      this.setState({
                          signSuccess: false,
                          signList: res.data.list.listdata,
                          signMessage: "签到失败!"
                      })
                  }
                  this.setState({
                      loaded: true,
                      signInfo: JSON.stringify(res),
                      status: res.status,
                      header: JSON.stringify(res.headers),
                      content: JSON.stringify(res.data)
                  })
              }else{
                  this.setState({
                      signSuccess: false,
                      signMessage: "登录失败!",
                      loaded: true,
                      signInfo: JSON.stringify(res),
                      status: res.status,
                      header: JSON.stringify(res.headers),
                      content: JSON.stringify(res.data)
                  })
              }
            }).catch(error => {
                console.log("请求错误....."+JSON.stringify(error.response))
             this.setState({
                loaded: true,
                signInfo: JSON.stringify(error),
                status: error.status,
                header: JSON.stringify(error.headers),
                content: JSON.stringify(error.data),
                signSuccess: false,
                signMessage: "签到失败!"
            })
        })
    }

    render(){
        console.log("render()")
        var options = {
            lines: 13,
            length: 20,
            width: 10,
            radius: 20,
            scale: 0.3,
            corners: 1,
            color: '#000',
            opacity: 0.25,
            rotate: 0,
            direction: 1,
            speed: 1,
            trail: 60,
            fps: 20,
            zIndex: 2e9,
            top: '50%',
            left: '50%',
            shadow: false,
            hwaccel: false,
            position: 'absolute'
        };
        //具有分根线的样式
        var styleObj = {
            marginTop:"10px",
            marginBottom:"10px",
            border:"1px solid #f4f4f4",
            fontWeight:"normal",
            boxShadow:"2px 2px 5px #333333"
        }
        return <div >
            {/*这是注释*/}
            <div class="row" style={{border:"1px solid #f4f4f4"}} >
                <div class="col-md-3">
                <div style={styleObj}>
                    <div className="list-group " >
                        <div className="list-group-item active">
                            今天：{this.state.date}
                        </div>
                        <div className="pre-scrollable" style={{height:"200px"}}>

                            {
                                this.state.signList.map((item,index)=>{
                                    return  ( <div className="list-group-item">
                                        <span style={{color:"red"}}>{index+1}</span>:{item.cl_time}
                                    </div>)
                                })
                            }
                        </div>


                    </div>
                </div>
                </div>
                <div className="col-md-4">
                    <form class="form-horizontal" style={styleObj}  onChange={this.handleChange.bind(this)}
                          onSubmit={this.handlerSave.bind(this)}>
                        <fieldset>
                            <div id="legend" class="" style={{margin:"20px 25px 25px 20px"}}>
                                <legend class="" style={{marginBottom:"10px",color:"blue"}}>登录管理系统</legend>
                            </div>

                            <div class="control-group row"  >
                                <label class="control-label col-xs-3" for="input01" >手机</label>
                                <div class="controls col-xs-9" style={{marginTop:"5px"}}>
                                    <input type="text"  ref="phone"  placeholder=""  value={this.state.phone} class="input-xlarge" />
                                    <p class="help-block"></p>
                                </div>
                            </div>

                            <div class="control-group row">
                                <label class="control-label col-xs-3" for="input01">密码</label>
                                <div class="controls col-xs-9" style={{marginTop:"5px"}}>
                                    <input type="text" ref="password" placeholder="" value={this.state.password} class="input-xlarge" />
                                    <p class="help-block"></p>
                                </div>
                            </div>

                            <div class="control-group row">
                                <label class="control-label col-xs-3" for="input01">时间</label>
                                <div class="controls col-xs-9" style={{marginTop:"5px"}}>
                                    <input type="text" ref="signDate" value={this.state.date} placeholder="" class="input-xlarge"/>
                                    <p class="help-block"></p>
                                </div>
                            </div>

                            <div class="control-group row">
                                <label class="control-label col-xs-3" style={{border:"0px solid #f4f4f4" ,height:"55px"}}>
                                    <Loader loaded={this.state.loaded} options={options}   ></Loader>
                                </label>
                                <div class="controls col-xs-9" style={{border:"0px solid #f4f4f4",marginTop:"5px"}}>

                                    <button class="btn btn-info " style={{marginBottom:"10px",marginTop:"10px"}}>提交</button>
                                    {this.state.signSuccess?
                                        <div style={{display:"inline",marginLeft:"10px"}}><span style={{color:"green"}}>{this.state.signMessage}</span></div>
                                        :
                                        <div style={{display:"inline",marginLeft:"10px"}}><span style={{color:"red"}}>{this.state.signMessage}</span></div>}


                                </div>
                            </div>

                        </fieldset>
                    </form>
                </div>
                <div class="col-md-2"></div>
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


        </div>
    }
}

export  default  SiginForm;