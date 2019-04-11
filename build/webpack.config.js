const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    index: path.join(__dirname, '../lib/index.tsx')
  },
  output: {
    path: path.join(__dirname, '../dist/lib'),
    library: 'UXCool',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 自动解析确定的扩展
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   loader: 'awesome-typescript-loader', // 使用 awesome-typescript-loader 来读取标准的 tsconfig.json 配置文件，从而来编译 TypeScript
      // },
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader', //直接通过强大的 babel-loader 来处理
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.scss$/,
        loader: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              modules: true, // 这将启用局部作用域 CSS
            }
          },
          'sass-loader'
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};