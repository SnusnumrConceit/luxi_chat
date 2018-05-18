"use strict";
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const loaders = require('./loaders.js');
const distPath = path.resolve(__dirname + '/dist');

const config = {
  entry: {
    general: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: distPath,
  },
  module: loaders,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(distPath, {
      verbose: true,
    })
  ]
};
//@todo vue loader

module.exports = config;
