/**
 * webpack.config.js
 * @fileOverview Webpack build configuration file.
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC_FOLDER = path.join(__dirname, 'client');
const DIST_FOLDER = path.join(__dirname, 'public');

module.exports = {
  entry: {
    app: path.join(SRC_FOLDER, 'index.js'),
  },
  output: {
    publicPath: '/',
    path: DIST_FOLDER,
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]&sourceMap&-minimize', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        query: {
          configFile: './.eslintrc',
        },
      },
    ],
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, 'client/modules'),
    },
    modules: [
      path.join(__dirname, './'),
      path.join(__dirname, './node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: DIST_FOLDER,
    port: 1337,
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({ // also generate an index.html
      filename: 'index.html',
      template: 'client/assets/html/index.html',
    }),
    new CopyWebpackPlugin([
      {
        context: path.resolve(SRC_FOLDER, 'assets/images'),
        from: 'basket_icon.png',
        to: path.resolve(DIST_FOLDER),
      },
    ]),
  ],
  devtool: 'source-map',
};

