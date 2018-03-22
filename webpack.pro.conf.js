/**
 * webpack开发阶段配置文件
 */
const path = require('path')
const webpack = require('webpack')
const htmlWP = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin('style/[name]-one.css');
const extractSASS = new ExtractTextPlugin('style/[name]-two.css');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
    entry: {
        app: path.resolve(__dirname,'src/main.js'),
        // 需要分离的第三方包名写在数组中
        vendors:['react','react-dom','react-router']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].build.js'
    },
    module: {
        rules:[
            // 处理js和jsx语法到es5
            {
                test: /\.js|jsx?$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ]

            },
            // 处理在js中引用css文件 + 抽取css
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // 处理在js中引用scss文件 + 抽取sass
            {
                test: /\.scss$/,
                // use:['style-loader','css-loader','sass-loader'],
                use: extractSASS.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
            },
            // 处理图片
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader?limit=30000&name=images/[name].[ext]'
            },
            // 处理iconfont
            {
                 test: /\.(eot|woff|ttf|woff2|svg)$/,
                 use: 'url-loader?limit=2500&name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 分离第三方包插件
        new webpack.optimize.CommonsChunkPlugin({name:'vendors',filename:'vendors.js'}),
        // 自动生成html插件
        new htmlWP({
            title: '首页',  //生成的页面标题
            filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
            template: './src/template.html', //根据template.html这个模板来生成(这个文件程序员自己书写)
            // html代码压缩
            minify: {
                // 删除注释
                removeComments: true,
                // 删除空格
                collapseWhitespace: true,
                // 删除空格缩进
                removeAttributeQuotes: true
            }
        }),
        // 删除dist目录
        new CleanPlugin(['dist']),
        // js代码压缩,混淆
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 抽取css文件插件
        // new ExtractTextPlugin('app.scss')
        extractCSS,
        extractSASS,
        // css压缩
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.(css|less|scss)$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: {removeAll: true } },
          canPrint: true
        })
    ]
}