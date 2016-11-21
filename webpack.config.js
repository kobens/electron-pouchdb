module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json/,
        use: [ { loader: 'json-loader' } ]
      }
    ],
    // this had to be added, otherwise the project won't build
    noParse: /lie\.js$|\/leveldown\//
  },
  target: 'electron'
}
