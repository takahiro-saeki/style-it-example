const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: path.resolve(__dirname, 'src'),
  performance: {
    hints: false
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Style-it example',
      template: path.join(__dirname, './src/ejs/index.ejs')
    }),
    new HtmlWebpackPlugin({
      title: 'Style-it example',
      template: path.join(__dirname, './src/ejs/404.ejs'),
      filename: '404.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
