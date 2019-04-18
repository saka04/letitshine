const path = require('path');
const webpack = require('webpack');
const browserslist = require('./package.json').browserslist;

module.exports = {
  mode: 'production',
  resolve: {
    modules: [
      path.resolve(__dirname, '_javascripts'),
      'node_modules'
    ],
    extensions: ['.js']
  },
  entry: {
    common: path.resolve(__dirname, '_javascripts/main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'assets/javascripts'),
    filename: '[name].js',
    library: 'Toolkit',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};
