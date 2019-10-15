const { resolve } = require('path');

module.exports = {
    entry: {
        main: ['@babel/polyfill', './src/index.js']
    },
    module: {
        rules: [{
            test: /\.(css|s[ac]ss)$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.js$/i,
            exclude: /\.(min|umd)\.js$/i,
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
    output: {
        path: resolve(__dirname, 'build', '<%= dizmoName %>'),
        filename: 'index.js'
    },
    mode: 'none'
};
