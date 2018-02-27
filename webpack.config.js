let path = require("path");
let WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  entry: './code.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
  ],
};
