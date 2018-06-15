/**
 * Created by Arison on 2018/6/15.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/**
 *  提供参数：webUrl
 * Created by Arison on 2018/6/15.
 */
class WebView extends React.Component {
    constructor(props) {
        super(props);
        console.log("组件参数："+JSON.stringify(this.props))
       // console.log("加载URL:"+JSON.stringify(this.props.match.path.state.webUrl))
        console.log("参数URL:"+JSON.stringify(this.props.match.params.webUrl))
    }

    render() {
        let url="https://"+this.props.match.params.webUrl;
        return <div className="row">
           {/* {"参数："+"https://"+this.props.match.params.webUrl}*/}
                <iframe className="col-md-12" style={{height:"600px",padding:"0"}} src={url} name="iframe_a"
                        frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
            </div>

    }
}

export  default WebView;