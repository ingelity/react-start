/**
 * Webpack config file for development mode used by the webpackDevServer.
 */
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const config = require('../config');

module.exports = {
  entry: [
    path.join(config.projectPath, 'client', 'reactApp'),
    // 'webpack-hot-middleware/client',
    'webpack-dev-server/client?http://localhost:9001',
    'webpack/hot/only-dev-server',
  ],

  output: {
    // output.path is not important here since dev bundle is served from memory
    path: path.join(config.projectPath, 'assets'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:9001/',
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    // if errors found during compiling, skips emitting assets that include errors
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css?module&importLoaders=1&localIdentName=[name]_[local]!postcss!sass',
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.eot$|\.woff$|\.woff2$|\.ttf$/,
        exclude: /node_modules/,
        loader: 'file',
      },
    ],
  },

  postcss: [autoprefixer],
};
