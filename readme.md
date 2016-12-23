# react + es6 + webpack 架构模板

<font color="#0099ff" size=12  face="微软雅黑">项目目录结构</font>
-----------------
|--app （开发目录）    
|&emsp;&emsp;|-------common（公共文件，例如css,工具代码等)  
|&emsp;&emsp;|-------components  (组件目录)  
|&emsp;&emsp;|-------pages （页面目录,例如可以存放首页，分类页，个人中心等页面）  
|&emsp;&emsp;|-------static （存放静态文件，图片等）  
|&emsp;&emsp;|-------build (打包输出目录)  
|&emsp;&emsp;|-------index.tmpl.html (html模板文件)  
|&emsp;&emsp;|-------main.js （入口文件，可以在webpack.config.js中配置）  
|  
|-------|-node_module （nodejs模块）    
|-------|-package.json （npm 配置文件）   
|-------|-webpack.config.js （webpack 配置文件）   

_使用方法：_
-----------------

### 1. `git clone https://github.com/cooleye/react-template.git`

### 2. `npm install` 安装依赖
### 3. `npm start` 运行项目


-----------------------------------------

#### *或者你也可以从零开始，先执行 npm init,创建 package.json，然后根据需要把依赖的模块安装上*
