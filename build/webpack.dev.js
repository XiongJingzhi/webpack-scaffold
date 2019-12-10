const webpack = require("webpack")

module.exports = {
  mode: 'development',
  devtool: 'cheap-moudle-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: '../dist',
    open: true,
    port: 8081,
    hot: true
  }
}