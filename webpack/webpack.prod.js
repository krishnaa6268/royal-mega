'use strict';

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common.js');

const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CompressionPlugin({ test: /\.(js|css)$/i }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
  performance: {
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js.gz');
    },
  },

  output: {
    path: path.resolve(__dirname, '../dist'), // folder where build will go
    filename: 'bundle.js',
    publicPath: '/', // important for Vercel SPA routing
  },
});
