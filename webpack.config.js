var webpack = require('webpack');
var path = require('path');
require("babel-core/register");
require("babel-polyfill");

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/src');

var config = {
  entry: ['babel-polyfill', APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [
        {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [{"loader":"file-loader","options":{"name":"public/assets/[name].[ext]"}},{"loader":"image-webpack-loader","options":{"mozjpeg":{"quality":65},"pngquant":{"quality":"10-20","speed":4},"svgo":{"plugins":[{"removeViewBox":false},{"removeEmptyAttrs":false}]},"gifsicle":{"optimizationLevel":7,"interlaced":false},"optipng":{"optimizationLevel":7,"interlaced":false}}}]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000',
        },
        { test: /(\.styl$)/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'stylus-loader'] },
        { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, exclude: /node_modules/, loader: 'url-loader?importLoaders=1&limit=100000' },
    ]
  }
};

module.exports = config;