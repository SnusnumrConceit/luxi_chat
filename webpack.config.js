"use strict";

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: {
    general: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ]
};

//@todo postcss loader
//@todo image loader
//@todo vue loader

module.exports = config;
