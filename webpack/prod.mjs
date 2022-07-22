/* eslint-env node, es2016 */
// production config
import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import commonConfig, {distDir, assetsDir} from './common.mjs';


export default merge(commonConfig(false), {
  mode: 'production',
  stats: 'verbose',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: distDir,
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
