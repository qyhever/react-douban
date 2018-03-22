/**
 * webpack开发阶段配置文件
 */
var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlupin = require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].build.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'api': path.resolve(__dirname, './src/api'),
      'assets': path.resolve(__dirname, './src/assets'),
      'common': path.resolve(__dirname, './src/common')
    }
  },
  module: {
    // webpack1的写法
    loaders: [
      // {
      //     test: /\.jsx?$/, // 用正则来匹配文件路径，匹配 js 或者 jsx
      //     loader: 'babel-loader',// webpack2不允许少写-loader
      //     query: {
      //         presets: ['es2015', 'react']
      //     }
      // },
      // {
      //     test: /\.css$/,
      //     loader: 'style-loader!css-loader'
      // }
      // {
      //     test: /\.scss$/,
      //     loader: 'style!css!sass'
      // }

    ],
    // webpack2的写法，webpack2的写法是兼容webpack1的
    rules: [
      // 处理js和jsx语法到es5
      {
        test: /\.js|jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          // options:{
          //     presets: ['es2015', 'react']
          // }
        }]

      },
      // 处理在js中引用css文件
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 处理在js中引用scss文件
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // 处理图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: 'url-loader?limit=25000&name=images/[name].[ext]'
      },
      // 处理iconfont
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: 'url-loader?limit=10000&name=fonts/[name].[ext]'
      },
      // 处理视频音频
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: 'url-loader?limit=10000&name=media/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlupin({
      title: '首页', //生成的页面标题
      filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
      template: './src/template.html' //根据template.html这个模板来生成
    })
  ]
}