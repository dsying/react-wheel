# icon组件开发

## webpack中配置 svg-sprite-loader
```
{
  test: /\.svg$/,
  loader: 'svg-sprite-loader'
}
```
目的：
+ 让webpack工程识别 svg文件
+ 在 输出的html中 埋入一个 svg标签，后续代码可通过 id 使用指定的svg图标

## custom.d.ts
```ts
declare module '*.svg' {
  const content: any;
  export default content;
}
```
如果不加： 
```
import '../icon/weixin.svg' //有效
import weixin from '../icon/weixin.svg' //无效
```
## 使用svg
```ts
import '../icon/weixin.svg';

interface IconProps {
  name: string,
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg>
      <use xlinkHref="#weixin"></use>
    </svg>
  );
};
```

## 动态导入所有svg 
```js
let importAll = (requireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('./icons/', true, /\.svg$/))
} catch (error) {
  // console.log(error)
}
```
