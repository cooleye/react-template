//################ react + es6 + webpack 架构模板 ################ //


项目目录结构

|_____app （开发目录）
|      |____common （公共文件，例如css,工具代码等）
|      |____components  (组件目录)
|      |____pages （页面目录,例如可以存放首页，分类页，个人中心等页面）
|      |____static （存放静态文件，图片等）
|      |____build (打包输出目录)
|      |____index.tmpl.html (html模板文件)
|      |____main.js （入口文件，可以在webpack.config.js中配置）
|      
|_____node_module （nodejs模块）
|
|_____package.json （npm 配置文件）
|
|_____webpack.config.js （webpack 配置文件）

使用方法：
1、npm install 安装依赖
2、npm start 运行项目
