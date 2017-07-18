var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/static/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/assets/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'PDF CMS - DEV',
      template: 'src/static/index.html',
      filename: 'index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-webpack-loader?verbose=true&warn=true'
      },

      {
        test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },

  resolve: {
    extensions: ['.js', '.elm']
  },

  devServer: {
    contentBase: '/dist',
    inline: true
  }
}