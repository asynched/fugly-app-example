const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/main.js',
  plugins: [
    new miniCss({
      filename: 'styles.min.css',
    }),
    new htmlPlugin({
      title: 'Fugly demo',
    }),
  ],
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.fugly$/,
        use: path.resolve(
          __dirname,
          'webpack-fugly-loader',
          'src',
          'loader.js'
        ),
      },
      {
        test: /\.css$/,
        use: [miniCss.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
