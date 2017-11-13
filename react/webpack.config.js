const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: {
    options: './options.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      '*.html'
    ])
  ]
};

module.exports = config;
