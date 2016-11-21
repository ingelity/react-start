const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const config = require('../config');

module.exports = {
  entry: [path.join(config.projectPath, 'client', 'reactApp')],

  output: {
    path: path.join(config.projectPath, 'assets'),
    filename: 'bundle.min.js',
  },

  devtool: 'source-map',

  externals: {
    // need to use react's production version, which we include as an external script in index.ejs,
    // and which exposes react as a global variable window.React.
    // so calling require("react") in our code will now reference window.React.
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      // this brings some sort of optimization when minifying
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin('styles.min.css'),
    // minifies the code
    // keeps hashes consistent between compilations
    new webpack.optimize.OccurenceOrderPlugin(),
    // deduplicates same files from the output
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
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
        // show errors only when building for production
        loaders: ['babel', 'eslint'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style', 'css?module&importLoaders=1&localIdentName=[hash:base64]!postcss!sass'
        ),
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
