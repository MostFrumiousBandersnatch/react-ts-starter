// shared config (dev and prod)
/* eslint-env node, commonjs */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const rootDir = resolve(__dirname, '../');
const srcDir = resolve(rootDir, 'src');

module.exports = dev => ({
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
        configFile: resolve(rootDir, 'tsconfig.json'),
      }),
    ],
  },
});
