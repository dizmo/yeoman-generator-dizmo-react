const { resolve } = require('path');
const webpack = require('webpack')

module.exports = {
    entry: {
        main: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js']
    },
    module: {
        rules: [{
            test: /\.(css|s[ac]ss)$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.js$/i,
            exclude: [/node_modules/i, /\.(min|umd)\.js$/i],
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    cacheDirectory: true,
                    compact: false
                }
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {}
        })
    ],
    output: {
        path: resolve(__dirname, 'build', '<%= dizmoName %>'),
        environment: { arrowFunction: false },
        filename: 'index.js'
    },
    mode: 'none'
};
