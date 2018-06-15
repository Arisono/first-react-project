/**
 * Created by Arison on 2018/6/15.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { message,Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
/**
 * Created by Arison on 2018/6/15.
 */
class MenuExample extends React.Component{
       constructor(props){
        super(props);
    }

    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);

        if(e.item.props.children instanceof Object){
            message.info("点击:"+e.item.props.children[1]+"  Key:"+e.key)
        }else{
            message.info("点击:"+e.item.props.children+"  英文Key:"+e.key)
        }

        this.setState({
            current: e.key,
        });
    }

    render(){
        return <div>
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="mail">
                    <Icon type="mail" />今日推荐
                </Menu.Item>
                <Menu.Item key="app" disabled>
                    <Icon type="appstore" />秒杀特价
                </Menu.Item>
                <SubMenu title={<span><Icon type="setting" />品牌商家</span>}>
                    <MenuItemGroup title="团购">
                        <Menu.Item key="setting:1">天猫</Menu.Item>
                        <Menu.Item key="setting:2">京东</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="批发">
                        <Menu.Item key="setting:3">苏宁易购</Menu.Item>
                        <Menu.Item key="setting:4">国美电器</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">百度一下</a>
                </Menu.Item>
            </Menu>

            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    }
}

export  default MenuExample;