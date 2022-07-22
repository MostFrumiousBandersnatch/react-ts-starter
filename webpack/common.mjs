// shared config (dev and prod)
/* eslint-env node, es2016 */
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

export const rootDir = path.resolve('./');
export const srcDir = path.resolve(rootDir, 'src');
export const distDir = path.resolve(rootDir, 'dist');
export const assetsDir = path.resolve(rootDir, 'assets');

export default dev => ({
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  context: srcDir,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              rootMode: 'upward',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          dev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
        ],
      },
      // {
      //   test: /\.(scss|sass)$/,
      //   loaders: [
      //     dev ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'dts-css-modules-loader',
      //       options: {
      //         namedExport: true,
      //         banner: '// This file is generated automatically by dts-css-modules-loader',
      //       },
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: { importLoaders: 1, sourceMap: dev, modules: true },
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: dev,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html.ejs' })],
  /*externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },*/
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@root': srcDir,
    },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(rootDir, 'tsconfig.json'),
      }),
    ],
  },
});
