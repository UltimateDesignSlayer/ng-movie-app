var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './source/js/entry-point.js',
  output: {
    path:  __dirname + '/assets/',
    filename: 'js/app.bundle.js'
  },
  module: {
    rules: [
      {
        test:   /\.(ttf|otf|eot|svg|woff2?)(\?.+)?$/, //for fonts to be bundled
        loader: 'url-loader',
        options:  {
          limit: 100000
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader'])
      },
      {
        test: /\.html$/, // for html templates used in directives
        exclude: /node_modules/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./css/app.bundle.css"),
  ]
}
