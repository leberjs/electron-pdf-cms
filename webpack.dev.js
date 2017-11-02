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

    // new ExtractTextPlugin("app.css"),

    // new CopyWebpackPlugin([
    //   { from: path.join(__dirname, 'src/main/main.js'), to: path.resolve(__dirname, 'dist') }
    // ])
  ],

  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: [/node_modules/],
  //       use: 'babel-loader'
  //     },

  //     {
  //       test: /\.scss$/,
  //       use: ExtractTextPlugin.extract({
  //         fallback: 'style-loader',
  //         use: ['css-loader', 'sass-loader']
  //       })
  //     },

  //     {
  //       test: /\.(woff|woff2|eot|ttf|svg)$/,
  //       use: [
  //         {
  //           loader: 'file-loader',
  //           options: {
  //             name: 'fonts/[name].[ext]'
  //           }
  //         }
  //       ]
  //     }
  //   ],
  // },

  // resolve: {
  //   extensions: ['.js', '.jsx']
  // },

  // target: 'node',

  devServer: {
    contentBase: '/dist',
    inline: true
  }
})