var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        demo: __dirname
    },
    output: {
        path: path.join(__dirname, '..'),
        publicPath: './',
        filename: '[name].js?[chunkhash]'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.(gif|png|jpe?g|svg)$/, loader: 'url-loader' }
        ]
    }
};
