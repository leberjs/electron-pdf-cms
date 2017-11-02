const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './app/renderer/index.js',
  //target: 'electron-renderer',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: 'babel-loader'
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },

      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }
    ],
  },

  plugins: [
    new ExtractTextPlugin("app.css"),

    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'app/main/main.js'), to: path.resolve(__dirname, 'dist') }
    ])
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  target: 'electron'
}