const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    library: 'MyLibrary',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        enforce: 'pre',

        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'env']
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css']
  },

  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  stats: 'errors-only',
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    compress: true,
    historyApiFallback: true,
    port: 8001
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
