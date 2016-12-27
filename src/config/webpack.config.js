var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index.jsx' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, '../../dist/'),
    filename: 'index.js',
  },
  resolve: {
    root: [
      path.resolve('./')
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel'],
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ]
};
