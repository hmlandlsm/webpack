<!-- 备注一些东西 -->
1、需要执行的命令：
mkdir webpack-demo && cd webpack-demo : 新建项目,名称为webpack-demo
npm init -y ：新建一个package.json文件
npm install webpack webpack-cli --save-dev :在开发环境安装webpack脚手架
npm install --save lodash：安装lodash模块，具体干嘛的我也不知道，帮忙打包的吧
npm install --save-dev style-loader css-loader: 安装来加载打包样式的
npm install --save-dev file-loader:加载图片的
npm install --save-dev csv-loader xml-loader:加载数据



<!-- 这些都是尚未安装成功的 -->
npm install --save-dev html-webpack-plugin:这玩意会在dist生成一个index.html文件，即使你之前有一个，它也会覆盖你的，不过你生成的所有bundle都会自动添加到index.html中

npm install clean-webpack-plugin --save-dev:每次构建dist前都清理dist文件夹，便于dist结构的管理吧，不要的删掉，不然呵呵哒

npm install --save-dev webpack-dev-server:安装实时编译的文件

npm install --save-dev express webpack-dev-middleware:将webpack处理后的文件传给服务器

npm install --save-dev style-loader css-loader:HMR修改样式表

npm install --save-dev webpack-merge:通过通用配置，无需在特定环境下重复代码

npm install --save-dev typescript ts-loader：webpack和TypeScript进行集成

npm install --save-dev @types/lodash ：从npm 安装typescrript用到的第三方库时，记得安装第三方库的类型声明文件
<!--     "@types/lodash": "^4.14.149",todo -->
<!--     "develop": "webpack-dev-server --open --config webpack.config.js" -->

结构解析：
dist：压缩后的文件夹
src:开发目录
src/index.js:项目入口文件
webpack.config.js:配置入口文件，输出文件和输出文件名称



2、管理资源
1）可以通过loader引入任何其他类型的文件

3、管理输出:html-webpack-plugin安装这个玩意
4、manifest:映射模块到bundle.js


命令执行:
npm run build:打包
npm run watch:监听文件，需刷新(其实有点毛病)
npm run start(npm start):监听文件自动编译刷新
npm run server:启动服务器

