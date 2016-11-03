var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: "json" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' ,query: { presets: ['es2015','react'] }},
      { test: /\.css$/, loader: 'style!css?modules!postcss' },
      //配置file-loader，加载图片，字体资源
      { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}
    ]
  },

 postcss: [
   require('autoprefixer')//调用autoprefixer插件
 ],


  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    })
  ],

  devServer: {
   colors: true,
   historyApiFallback: true,
   inline: true
 }
}
