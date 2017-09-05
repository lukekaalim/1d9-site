const path = require('path');
const HtmlWebpackPulgin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: { 
    contentBase: './dist',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [path.resolve('./src'), 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPulgin({
      template: 'src/index.ejs'
    }), 
  ],
  module: {
    rules: [
      { test: /\.(tsx|ts)$/, loader: 'awesome-typescript-loader' },
      { enforce: "pre", test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.css$/,  use: ['style-loader', 'css-loader'] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }, 
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }, 
    ]
  },
};
