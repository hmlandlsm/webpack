// 开始加载print.js文件
console.log('The print.js module has loaded! See the network tab in dev tools...');
export default function printMe() {
    // 用于判断是否调用print.js文件
    console.log('调用了print.js文件了');
    // 用于判断输出警告和错误的来源
    console.error('I get called from print.js');
    console.log('Updating print.js.....')
}