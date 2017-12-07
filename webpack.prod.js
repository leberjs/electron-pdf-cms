var path = require('path')
const merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base.js')

module.exports = merge.smart(baseConfig, {
  //devtool: 'cheap-module-source-map',
  //entry: './app/static/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'PDF CMS',
      template: 'app/static/index.html',
      filename: 'index.html',
      minify: { collapseWhitespace: true }
    })
  ]

  // module: {
  //   rules: [
  //     {
  //       test: /\.elm$/,
  //       exclude: [/elm-stuff/, /node_modules/],
  //       loader: 'elm-webpack-loader?verbose=true&warn=true'
  //     },

  //     {
  //       test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']
  //     }
  //   ],
  // },

  // resolve: {
  //   extensions: ['.js', '.elm']
  // },

})
