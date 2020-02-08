const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

// express使用webpack-devmiddleware容器和配置文件
app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}))