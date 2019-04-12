const base = require('./webpack.config')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    example: path.join(__dirname, '../example.tsx')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html')
    }),
  ],
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: '8887',
    overlay: {
      errors: true
    },
    publicPath: '/'
  },

})