const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: path.join(__dirname, '../lib/index.tsx')
  },
  output: {
    path: path.join(__dirname, '../dist/lib'),
    filename: '[name].[hash].js',
    publicPath: '/public/',
    library: 'UXCool',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 自动解析确定的扩展
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html')
    })
  ],
};