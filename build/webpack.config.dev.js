const base = require('./webpack.config')

module.exports = Object.assign({}, base, {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: '8887',
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    },
  },

})