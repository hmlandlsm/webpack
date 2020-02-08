const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config');
const options = {
    contentBase:'./dist',
    hot:'true',
    host:'localhost'
}

webpackDevSer = new webpackDevServer(compiler,options);
ver.addDevServerEntrypoints(config,options);
const compiler = webpack(config);
const server
server.listen(5000,'localhost',() => {
    console.log('dev server listening on port 5000');
})