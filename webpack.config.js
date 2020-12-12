const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname,'./src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname,"static")}
      ],
    }),
  ],
  module:{
      rules:[
          {
              test: /\.js$|\.jsx$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
              }
          }
      ]
  },
  devServer: {
    contentBase: path.resolve(__dirname,'./build'),
    port: 9000
  },
  watch: true
};
