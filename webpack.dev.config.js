var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var APP_FILE = path.resolve(APP_PATH, 'index.js');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    APP_FILE
  ],

  output: {
    path: APP_PATH,
    filename: 'bundle.js'
  },

  devtool: "cheap-module-eval-source-map",

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer'])
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'less'])
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-1']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.less']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new OpenBrowserPlugin({url: 'http://localhost:8080/#/'}),
    new ExtractTextPlugin("app.css")
  ]
};
