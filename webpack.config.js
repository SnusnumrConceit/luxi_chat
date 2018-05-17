"use strict";
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const rules = require('./module.js');
const distPath = path.resolve(__dirname + '/dist');

const config = {
  entry: {
    general: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: distPath,
  },
  module: rules,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(distPath, {
      verbose: true,
    })
  ]
};

//@todo postcss loader
//@todo image loader
//@todo vue loader

module.exports = config;
