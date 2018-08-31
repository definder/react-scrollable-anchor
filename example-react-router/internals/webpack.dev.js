/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    filename: 'index.html',
    template: path.join(__dirname, '../server/assets/html/index.html'),
  }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('development'),
    //   },
    // }),
  new webpack.NamedModulesPlugin(),
];

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, '../src', 'index'),
  ],
  output: {
    path: path.join(__dirname),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        }]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'css-loader',
          },
          'resolve-url-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
            limit: 10000,
          },
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins,
  resolve: {
    alias: { react: path.resolve(__dirname, '../../node_modules', 'react') },
    modules: ['src', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  performance: {
    hints: false,
  },
}
