"use strict";

var path = require("path");

var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "main.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.(png|svg|jpe?g|gif)$/i,
      type: 'asset/resource'
    }]
  },
  optimization: {
    minimize: true
  },
  plugins: [new webpack.DefinePlugin({
    "process.env": {
      // This has effect on the react lib size
      NODE_ENV: JSON.stringify("production")
    }
  })],
  stats: {
    errorDetails: true
  }
};