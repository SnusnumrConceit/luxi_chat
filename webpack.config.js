"use strict";

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const env = process.env.NODE_ENV;

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
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          name (file) {
            if (env === 'development') {
              return '[path][name].[ext]'
            }
            return '[hash].[ext]'
          }
        }
      }
    ],
  },
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
