const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
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
        extensions: ['.js', '.jsx', '.ts', '.tsx'] // 自动解析确定的扩展
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html')
        })
    ],
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

}