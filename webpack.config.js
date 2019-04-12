const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, './src');

module.exports = env => {
  return {
        entry: ['@babel/polyfill', APP_DIR],
        devServer: {
          contentBase: path.join(__dirname, 'dist'),
          compress: true,
          port: 9000
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            },
          ]
        },
    }
};