/* eslint-env node, commonjs */
// production config
const merge = require('webpack-merge');
const { resolve } = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./common');

module.exports = merge(commonConfig(false), {
  mode: 'production',
  stats: 'verbose',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  devtool: 'hidden-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
