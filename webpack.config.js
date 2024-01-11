const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],

  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
        "style-loader",

        "css-loader",
          
        "sass-loader",
        ],
      },
    ],
  },
};
