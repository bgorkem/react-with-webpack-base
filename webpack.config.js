var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: { import: './src/index.js', dependOn: 'vendors' },
    vendors: ['react', 'react-dom'],
  },

  devtool: 'source-map',
  devServer: {
    writeToDisk: true,
  },

  module: {
    rules: [{ test: /\.jsx?/, use: 'babel-loader' }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
