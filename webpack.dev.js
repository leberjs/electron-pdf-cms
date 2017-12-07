const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseConfig = require('./webpack.config.base.js')

module.exports = merge.smart(baseConfig, {
  devtool: 'cheap-module-source-map',
  // entry: './src/renderer/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/assets/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'PDF CMS - DEV',
      template: 'app/static/index.html',
      filename: 'index.html'
    })
  ],

  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: '/dist',
    inline: true
  }
})
