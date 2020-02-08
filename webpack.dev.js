// 开发环境配置代码
// 注重点:实时编译、热加载、报错警告追踪

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});