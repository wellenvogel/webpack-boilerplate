const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
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
          },
          {
            test: /\.css$|\.less$/,
            use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
          },
          {
            test: /\.hb$|\.handlebars$/,
            use: ['handlebars-loader']
          }
      ]
  },
  resolve: {
    //https://github.com/handlebars-lang/handlebars.js/issues/1174
    alias: {
       handlebars: 'handlebars/dist/handlebars.min.js'
    }
  },
  devServer: {
    port: 9000
  }
};
