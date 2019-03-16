const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
  mode: 'production',
  externals: { //externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  }
})