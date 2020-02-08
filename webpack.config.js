const path = require('path');
// 配置入口文件路径，输出文件路径和名称
// 注意：当windows中通过调用路径去调用webpack时，必须反斜线（）
// eg:node_modules \.bin\webpack --webpack.config.js TODO

const HtmlWebpackPlugin = require('html-webpack-plugin'); //便于打包，自动生成index.html并且帮你把所有的bundle都引进去
// const CleanWebpackPlugin = require('clean-webpack-plugin'); //每次构建dist都会删除旧的dist，便于管理吧
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const webpack = require('webpack');  //启用HMR(模块热替换)


module.exports = {
    // 入口文件
    // entry:'./src/index.js',
    // 改为多个入口文件
    entry: {
        app:'./src/index.js',
        // another: './src/another-module.js',
        // print:'./src/print.js'
    },

    // 用于开发环境，便于跟踪bundle.js文件的警告和错误具体来自哪份源文件
    devtool:'inline-source-map',

    // 实时编译,在localhost:8080将disy目录下的文件作为访问文件
    devServer:{
        contentBase:'./dist',
        hot:true   // 模块热替换
    },

    // 新增个插件
    plugins: [


        // 清除dist插件
        // webpack4.0换了一种引用写法，但是要传的是对象emmm，干脆先不传
        // new CleanWebpackPlugin(['dist']),
        new CleanWebpackPlugin(),
        // 管理输出文件
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),


        // 模块热加载
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),


        // 移除重复引入的模块
        // webpack4.0删除了这个模块，代码分包问题优化为SplitChunksPlugin
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'common' // 指定功能bundle的名称
        // })


        // 定义一个全局变量玩玩
        new webpack.ProvidePlugin({
          _: 'lodash'
        })
    ],

    // 输出文件
    output: {
        // filename:'bundle.js',
        // 使用output.filename进行文件名替换，确保浏览器获取修改后的文件
        filename:'[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        // 将webpack处理后的文件传给服务器,在localhost:3000下可以访问
        publicPath:'./'  //当前文件的路径，再拼接dist啊什么的，自己拼接
    },

    // 配置模式
    // 影响:那些被找出的dead code，这个标识会使这些dead code 在bundle中删除
    // 启用uglifyjs 压缩文件
    // 作用同等于 npm run build --optimize-minimize???TODO
    // mode:"development",
    module: {
        rules: [
            // 打包样式文件
            // 正则匹配注释：以.css结尾的所有文件，都塞给下面这两个样式编译器
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 加载图片
            {
                test:/\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, 
            // 加载字体
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },
            // 加载动态动态资源数据，csv、tsv、xml
            {
                test:/\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test:/\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            // webpack与typeSctipt进行集成配置
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/   
            }
        ]
    },

    // 代码分包优化
    optimization: {
        // splitChunks: {
        //   chunks: 'all',
        // },
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
        //   cacheGroups: {
        //     vendors: {
        //       test: /[\\/]node_modules[\\/]/,
        //       priority: -10
        //     },
        //     default: {
        //       minChunks: 2,
        //       priority: -20,
        //       reuseExistingChunk: true
        //     }
        //   }
        }
    },

    // 隐藏那些看起来不顺眼的警告
    performance: {
        hints:false      
    }
        
}