"use strict";
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const rules = require('./module.js');

const config = {
  entry: {
    general: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist'),
  },
  module: rules,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
};

//@todo postcss loader
//@todo image loader
//@todo vue loader

module.exports = config;
