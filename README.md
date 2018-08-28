# React知识学习

### 环境搭建

- 脚手架
- 基本组件
- 路由组件

> 安装路由组件

````
npm install react-router react-router-dom --save
````
> 安装Antd [(Antd 组件文档)](https://ant.design/components/menu/)

````
npm install antd --save
````


> 安装Redux
````
npm install --save redux react-redux redux-thunk
npm install --save-dev redux-logger
npm install --save-dev redux-devtools
````
redux不用说了，我是把它当成一个本地数据库使用，react-redux帮助你完成数据订阅，redux-thunk可以放你实现异步action，redux-logger是redux的日志中间件。
redux-devtools 是用于调式开发用。
> 安装sortablejs
````
npm install sortablejs --save
````

---

### 理论知识

#### **路由库React-Router**

 React 体系的一个重要部分：路由库React-Router。它是官方维护的，事实上也是唯一可选的路由库。它通过管理 URL，实现组件的切换和状态的变化，开发复杂的应用几乎肯定会用到。

### 功能列表

#### 第一阶段：

- 掌握基本的React语法
- 掌握基本的CSS样式

```
 [react-bootstrap](https://react-bootstrap.github.io/layout/grid/)
```

- **掌握脚手架基本打包流程**

WEBStorm Terminal视图窗口执行打包命令

````
npm run build
````
在根目录下的package.json文件下，配置homepage字段进行服务器自定义访问路径

```
 "homepage":"/Chapter"
```

#### 第二阶段：

- 熟练掌握React常用组件
- 熟练掌握React路由
- 熟练掌握React 开发框架Redux
- 熟练掌握React UI框架Antd
- 熟练掌握自定义CSS样式
- 熟练掌握React网络请求处理

#### 第三阶段

-  能够处理UI样式兼容性问题
-  能够封装常用自定义组件和公共方法
-  能够借鉴和自己搭建优秀的架构方案