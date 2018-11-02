/**
 * Created by Arison on 2018/10/26.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'antd';
/**
 * Created by Arison on 8:47.
 */
class AntdPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'AntdPage'
        };
    }
    
    
    componentDidMount(){
        
    }
   
    render(){
        return <div>
            <div>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
            </div>
        </div>
    }
}

export  default AntdPage;