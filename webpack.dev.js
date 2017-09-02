var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/static/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/assets/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'PDF CMS - DEV',
      template: 'src/static/index.html',
      filename: 'index.html'
    }),

    new ExtractTextPlugin("app.css")
  ],

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

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    contentBase: '/dist',
    inline: true
  }
}