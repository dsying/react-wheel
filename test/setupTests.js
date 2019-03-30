/**
 * 在每次测试之前运行一些代码以配置或设置测试框架的模块的路径列表。
 * 由于setupFiles在环境中安装测试框架之前执行，
 * 因此该脚本文件为您提供了在环境中安装测试框架后立即运行某些代码的机会。
*/

// 配置enzyme https://airbnb.io/enzyme/docs/installation/react-16.html
const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

enzyme.configure({adapter: new Adapter()})