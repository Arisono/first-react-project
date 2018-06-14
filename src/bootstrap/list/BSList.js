import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * Created by Arison on 2018/6/1.
 */
class BSList extends React.Component{
   
    render(){
        let borderLine={
            border:"1px solid #f4f4f4"};
        let borderblue={
            border:"1px solid blue"};
        let borderred={
            border:"1px solid red"};
        let notBorder={
            marginTop:"0px",
            marginLeft:"0px",
            marginRight:"0px",
            border:"1px solid green"
        };
        //顶部导航栏链接样式
        let navText={height:"60px",
            fontSize:"17px",
            textAlign:"center",
            lineHeight:"30px",
            display:"display",
            border:"0px solid green"};
        return <div className="" >
            {/*导航栏 navbar-fixed-top*/}
            <div className="row" >
                <nav class="navbar navbar-inverse " role="navigation" style={{
                        "-webkit-border-radius": "0",
                         "-moz-border-radius": "0",
                         "border-radius": "0",
                         height:"60px"

                }} >
                    <div class="container-fluid" >
                        <div class="navbar-header" >
                            <a class="navbar-brand" href="#" style={navText}>技术专栏</a>
                        </div>
                        <div  >
                            <ul class="nav navbar-nav" >
                                <li class="active"><a href="#" style={navText}>iOS</a></li>
                                <li><a href="#" style={navText}>SVN</a></li>
                                <li class="dropdown" >
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" style={navText}>
                                        Java <b class="caret"></b>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">jmeter</a></li>
                                        <li><a href="#">EJB</a></li>
                                        <li><a href="#">Jasper Report</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#">分离的链接</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#">另一个分离的链接</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
{/*列表组件*/}
            <div className="row" >
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {/*<div class="alert alert-warning">*/}
                            {/*<a href="#" class="close" data-dismiss="alert">*/}
                            {/*</a>*/}
                            {/*<strong>警告！</strong>您的网络连接有问题。*/}
                        {/*</div>*/}
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="col-lg-3">
                    <ul class="list-group">
                        <a href="#" class="list-group-item active">
                            专业技术学习资料
                        </a>
                        <li class="list-group-item">Android</li>
                        <li class="list-group-item">Spring学习资料</li>
                        <li class="list-group-item"><span class="badge">新</span>React学习资料</li>
                        <li class="list-group-item">Android自定义View</li>
                        <li class="list-group-item">Android-Java-网络框架</li>
                    </ul>

                    <a href="#" class="list-group-item active">
                        前端学习资料
                    </a>
                    <a href="#" class="list-group-item">React基本语法</a>
                    <a href="#" class="list-group-item">React脚手架项目</a>
                    <a href="#" class="list-group-item">React事件</a>
                    <a href="#" class="list-group-item">React组件通信</a>
                </div>
                <div className="col-lg-6">
                    <div class="list-group" style={borderLine}>
                        <a href="#" class="list-group-item active" >
                            云端编程技术资料汇总
                        </a>

                        <a href="#" class="list-group-item" style={borderLine}>
                            <h4 class="list-group-item-heading">
                                Spring Boot
                            </h4>
                            <p class="list-group-item-text">
                                通过SpringBoot系列教程，帮助您掌握构建服务器程序的骨干
                            </p>

                        </a>

                        <a href="#" class="list-group-item" style={borderLine}>
                            <h4 class="list-group-item-heading">
                                Spring Boot
                            </h4>
                            <p class="list-group-item-text">
                                通过SpringBoot系列教程，帮助您掌握构建服务器程序的骨干
                            </p>
                        </a>

                        <a href="#" class="list-group-item" style={borderLine}>
                            <h4 class="list-group-item-heading">
                                Spring Boot
                            </h4>
                            <p class="list-group-item-text">
                                通过SpringBoot系列教程，帮助您掌握构建服务器程序的骨干
                            </p>
                        </a>


                        <a href="#" class="list-group-item" style={borderLine}>
                            <h4 class="list-group-item-heading">
                                Spring Boot
                            </h4>
                            <p class="list-group-item-text">
                                通过SpringBoot系列教程，帮助您掌握构建服务器程序的骨干
                            </p>
                        </a>

                        <a href="#" class="list-group-item" style={borderLine}>
                            <h4 class="list-group-item-heading">
                                Spring Boot
                            </h4>
                            <p class="list-group-item-text">
                                通过SpringBoot系列教程，帮助您掌握构建服务器程序的骨干
                            </p>
                        </a>
                        <a href="#" class="list-group-item" style={borderLine}>
                            <h4 class="list-group-item-heading">
                                Spring Boot
                            </h4>
                            <p class="list-group-item-text">
                                通过SpringBoot系列教程，帮助您掌握构建服务器程序的骨干
                            </p>
                        </a>

                        <div class="list-group-item">
                            <ul class="pagination" style={{marginBottom:"0px",marginTop:"0px",paddingBottom:"0px"
                                ,paddingTop:"0px"}}>
                                <li><a href="#">&laquo;</a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">6</a></li>
                                <li><a href="#">7</a></li>
                                <li><a href="#">8</a></li>
                                <li><a href="#">9</a></li>
                                <li><a href="#">10</a></li>
                                <li><a href="#">&raquo;</a></li>
                            </ul>
                        </div>



                    </div>

                </div>
                <div className="col-lg-3">
                       <div className="page-header" style={{marginTop:"2px"}}>标签</div>
                       <div className="pager">
                           <span class="label label-default col-sm-3"
                                  style={{marginRight:"5px",marginBottom:"5px"}}>Android</span>
                       <span class="label label-primary col-sm-3"
                             style={{marginRight:"5px",marginBottom:"5px"}}>Java</span>
                       <span class="label label-success col-sm-3"
                             style={{marginRight:"5px",marginBottom:"5px"}}>SpringBoot</span>
                       <span class="label label-info col-sm-3"
                             style={{marginRight:"5px",marginBottom:"5px"}}>React</span>
                       <span class="label label-warning col-sm-3"
                             style={{marginRight:"5px",marginBottom:"5px"}}>ReactNative</span>
                       <span class="label label-danger col-sm-3"
                             style={{marginRight:"5px",marginBottom:"5px"}}>Okhttp</span>
                       <span class="label label-success col-sm-3"
                             style={{marginRight:"5px",marginBottom:"5px"}}>Mybaits</span>
                       <span class="label label-info col-sm-3"
                             style={{marginRight:"5px",marginBottom:"5px"}}>Mysql</span>
                       <span class="label label-warning col-sm-3"
                             style={{marginRight:"5px",marginBottom:"5px"}}>Bootstrap</span>
                       <span class="label label-danger col-sm-3"
                             style={{marginRight:"5px",marginBottom:"5px"}}>Vue</span></div>
                    <div className="page-header" style={{marginTop:"2px"}}>标签</div>
                    <div className="pager">
                           <span class="label label-default col-sm-3"
                                 style={{marginRight:"5px",marginBottom:"5px"}}>Android</span>
                        <span class="label label-primary col-sm-3"
                              style={{marginRight:"5px",marginBottom:"5px"}}>Java</span>
                        <span class="label label-success col-sm-3"
                              style={{marginRight:"5px",marginBottom:"5px"}}>SpringBoot</span>
                        <span class="label label-info col-sm-3"
                              style={{marginRight:"5px",marginBottom:"5px"}}>React</span>
                        <span class="label label-warning col-sm-3"
                              style={{marginRight:"5px",marginBottom:"5px"}}>ReactNative</span>
                        <span class="label label-danger col-sm-3"
                              style={{marginRight:"5px",marginBottom:"5px"}}>Okhttp</span>
                        <span class="label label-success col-sm-3"
                              style={{marginRight:"5px",marginBottom:"5px"}}>Mybaits</span>
                        <span class="label label-info col-sm-3"
                              style={{marginRight:"5px",marginBottom:"5px"}}>Mysql</span>
                        <span class="label label-warning col-sm-3"
                              style={{marginRight:"5px",marginBottom:"5px"}}>Bootstrap</span>
                        <span class="label label-danger col-sm-3"
                              style={{marginRight:"5px",marginBottom:"5px"}}>Vue</span></div>

                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <h3 class="panel-title">关于我</h3>
                        </div>
                        <div class="panel-body">
                            <h4>联系方式</h4>
                            <ul>
                                <li>Github:<a href="https://github.com/Arisono" target="_blank"
                                >https://github.com/Arisono</a></li>
                                <li>CSDN:</li>
                                <li>QQ群:</li>
                                <li>微信订阅号:</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div className="page-header" style={{marginLeft:"20px"}}><span><h3>案例展示</h3></span></div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="http://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg"
                             alt="通用的占位符缩略图"/>
                            <div class="caption">
                                <h3>缩略图标签</h3>
                                <p>一些示例文本。一些示例文本。</p>
                                <p>
                                    <a href="#" class="btn btn-primary" role="button">
                                        按钮
                                    </a>
                                    <a href="#" class="btn btn-default" role="button">
                                        按钮
                                    </a>
                                </p>
                            </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="http://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg"
                             alt="通用的占位符缩略图"/>
                            <div class="caption">
                                <h3>缩略图标签</h3>
                                <p>一些示例文本。一些示例文本。</p>
                                <p>
                                    <a href="#" class="btn btn-primary" role="button">
                                        按钮
                                    </a>
                                    <a href="#" class="btn btn-default" role="button">
                                        按钮
                                    </a>
                                </p>
                            </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="http://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg"
                             alt="通用的占位符缩略图"/>
                            <div class="caption">
                                <h3>缩略图标签</h3>
                                <p>一些示例文本。一些示例文本。</p>
                                <p>
                                    <a href="#" class="btn btn-primary" role="button">
                                        按钮
                                    </a>
                                    <a href="#" class="btn btn-default" role="button">
                                        按钮
                                    </a>
                                </p>
                            </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="http://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg"
                             alt="通用的占位符缩略图"/>
                            <div class="caption">
                                <h3>缩略图标签</h3>
                                <p>一些示例文本。一些示例文本。</p>
                                <p>
                                    <a href="#" class="btn btn-primary" role="button">
                                        按钮
                                    </a>
                                    <a href="#" class="btn btn-default" role="button">
                                        按钮
                                    </a>
                                </p>
                            </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="http://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg"
                             alt="通用的占位符缩略图"/>
                        <div class="caption">
                            <h3>缩略图标签</h3>
                            <p>一些示例文本。一些示例文本。</p>
                            <p>
                                <a href="#" class="btn btn-primary" role="button">
                                    按钮
                                </a>
                                <a href="#" class="btn btn-default" role="button">
                                    按钮
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="http://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg"
                             alt="通用的占位符缩略图"/>
                        <div class="caption">
                            <h3>缩略图标签</h3>
                            <p>一些示例文本。一些示例文本。</p>
                            <p>
                                <a href="#" class="btn btn-primary" role="button">
                                    按钮
                                </a>
                                <a href="#" class="btn btn-default" role="button">
                                    按钮
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="http://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg"
                             alt="通用的占位符缩略图"/>
                        <div class="caption">
                            <h3>缩略图标签</h3>
                            <p>一些示例文本。一些示例文本。</p>
                            <p>
                                <a href="#" class="btn btn-primary" role="button">
                                    按钮
                                </a>
                                <a href="#" class="btn btn-default" role="button">
                                    按钮
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src="http://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg"
                             alt="通用的占位符缩略图"/>
                        <div class="caption">
                            <h3>缩略图标签</h3>
                            <p>一些示例文本。一些示例文本。</p>
                            <p>
                                <a href="#" class="btn btn-primary" role="button">
                                    按钮
                                </a>
                                <a href="#" class="btn btn-default" role="button">
                                    按钮
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <table class="table table-bordered">
                        <caption>值班人员</caption>
                        <thead>
                        <tr>
                            <th>姓名</th>
                            <th>日期</th>
                            <th>签到</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>a</td>
                            <td>星期二</td>
                            <td>是</td>
                        </tr>
                        <tr>
                            <td>b</td>
                            <td>Mumbai</td>
                            <td>400003</td>
                        </tr>
                        <tr>
                            <td>Uma</td>
                            <td>Pune</td>
                            <td>411027</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            {/*页脚*/}
            <div className="row" style={{height:"500px"}}>

            </div>
        </div>
    }
}

export  default  BSList;

