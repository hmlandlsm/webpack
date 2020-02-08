// _ 定义为一个全局变量
// webpack能够对import、export提供开箱即用般的支持
// import _ from 'lodash';
import './style/demo.css'; //样式测试
// import Icon from'./image/demo.jpg'; // 图片测试
import Data from './data/data.xml'; //加载数据

// import printMe from './print.js'; //管理输出
import numRef from './ref.json';  // 引用自定义库
import {cube} from './math.js';


function component () {
    // var element = document.createElement('div');
    // element.innerHTML = _.join(['dededede','webpack'],' ');
    // element.classList.add('demo'); //样式
    // var myIcon = new Image(); // 图片
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    console.log('测试数据',Data); // 加载数据

    // 管理输出
    // var btn = document.createElement('div');
    // btn.innerHTML = '点我并且看看控制台呗';
    // btn.onclick = printMe;

    // 测试移除无效代码
    var detach  = document.createElement('pre');
    detach.innerHTML = [
        '测试移除无11111效代码',
        '5的立方是' + cube(5)
    ].join('\n\n');

    // element.appendChild(btn);
    // return element;

    return detach;


}
// document.body.appendChild(component());

// 模块热加载
// 1)当文件改变是，重新获取渲染元素
let element = component();
document.body.appendChild(element);

if(module.hot) {
    module.hot.accept('./print.js',function() {
        console.log('Accept the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}

export function numToWord(num) {
    return _.reduce(numRef, (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    }, '');
  };
  
  export function wordToNum(word) {
    return _.reduce(numRef, (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
  };