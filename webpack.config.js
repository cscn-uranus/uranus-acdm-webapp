'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    modules: [
      path.resolve(__dirname, 'src/'),
      path.resolve(__dirname, 'lib/kendo/js/'),
      'node_modules',
    ],
    alias: {
      kendo: path.resolve(__dirname, 'lib/kendo/js/'),
    },
  },
  entry: './src/app/acdm-app.module.js',
  output: {
    filename: 'webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // devtool: 'inline-source-map',
  devtool: false,
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    port: 4000,
  },
  module: {
    noParse: [
      /[\/\\]node_modules[\/\\]angular[\/\\]angular\.js$/,
    ],
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
