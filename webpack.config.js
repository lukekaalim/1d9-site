const webpack = require('webpack');

const path = require('path');
const htmlWebpackPulgin = require('html-webpack-plugin');
const transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread')

const babelOpts = {
  presets: ['env', 'react'],
  plugins: [transformObjectRestSpread],
  cacheDirectory: true,
};
const cssOpts = {
  modules: true,
  minimize: true,
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve('./dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'source-map',
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
  },
  plugins: [
    new htmlWebpackPulgin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: babelOpts } },
      { test: /\.css$/,  use: ['style-loader', { loader: 'css-loader', options: cssOpts }] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
    ]
  },
};
