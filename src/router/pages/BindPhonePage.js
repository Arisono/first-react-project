/**
 * Created by Arison on 2018/10/19.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReduxIndex from "../../redux/ReduxIndex";
import  http_axios from  'axios'
import {URLSearchParams} from "url";
/**
 * Created by Arison on 2018/10/19.
 */
class BindPhonePage extends React.Component{
       constructor(props){
        super(props);
        this.state={
            phone: '',
            bindPhone:"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbc1f8607137d3b8a&redirect_uri=https%3a%2f%2fwww.akuiguoshu.com%2fwxService%2fwxlogin&response_type=code&scope=snsapi_userinfo&state=13266699268#wechat_redirect"
        }
    }

    componentDidMount(){

        //    http_axios.get("https://www.akuiguoshu.com/wxService/wxBind?phone=12313123&openid=123123").then(res=>{
        //       console.log("success ()"+JSON.stringify(res));
        //    }).catch (error=>{
        //        console.log("error ()"+JSON.stringify(error));
        // })

        // http_axios.post("https://www.akuiguoshu.com/wxService/wxBind",{
        //     phone:'12313123',
        //     openid:'123123'
        // }).then(res=>{
        //     console.log("success ()"+JSON.stringify(res));
        // }).catch (error=>{
        //     console.log("error ()"+JSON.stringify(error));
        // })

    }
    bindPhoneEvent(e){
        var href_wx_login="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbc1f8607137d3b8a&redirect_uri=https%3a%2f%2fwww.akuiguoshu.com%2fwxService%2fwxlogin&response_type=code&scope=snsapi_userinfo&state="+e.target.value+"#wechat_redirect";
         this.setState({
             phone: e.target.value,
             bindPhone:href_wx_login
        })
    }



    render(){
        console.log("BindPhonePage:"+this.props.match.url);
        return <div>
            <p style={{fontSize:50}}> 绑定手机号界面</p>
            <p><a href={this.state.bindPhone}>点击登录</a></p>
            <input type='number'  className='phoneInput' placeholder='请输入手机号'
                   value={this.state.phone} onChange={this.bindPhoneEvent.bind(this)}/>

        </div>
    }
}

export  default BindPhonePage;