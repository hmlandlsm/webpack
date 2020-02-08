// 生产环境配置的代码
// 注重点：压缩

const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
        sourceMap:true
    }),
    
    // NODE_DEV:是Node.js暴露给执行脚本的系统环境变量、
    // 这个配置不能在webpack.config.js里卖弄直接配置
    // 在入口文件中判断则是有效的
    new webpack.DefinePlugin({
        'process.env.NODE_ENV':JSON.stringify('production')
    })
  ]
});