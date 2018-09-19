var path = require('path')

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
}