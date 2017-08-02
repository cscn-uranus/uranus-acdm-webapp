'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/app/app.js',
  output: {
    filename: 'webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 4000
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // 在HTML中创建style节点，内嵌CSS
          }, {
              loader: "css-loader" // 便CSS也具有像JS一样的模块化功能
          }, {
              loader: "sass-loader" // 将SASS编译成CSS
          }]
      },
      {
          test: /\.css$/,
          include: [
              path.resolve(__dirname, "not_exist_path")
          ],
          loader: "style!css"
      }
    ],
      loaders: [

          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
          { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
      ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

};
