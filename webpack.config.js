var path = require('path')

module.exports = {
  entry: ['./src/index.js'], // file extension after index is optional for .js files
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/js/bundle.js'
  }
  // ,
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compressor: {
  //       warnings: false,
  //     },
  //   })
  // ]
  ,module: {
    loaders: [
      {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
              presets: ['es2015','react']
          }
      },


      // {
      //     test: /.js$/,
      //     loader: 'babel',
      //     exclude: /node_modules/,
      //     query: {
      //         cacheDirectory: true,
      //         presets: ['es2015', 'react'],
      //         plugins: ["react-hot-loader/babel"]
      //     }
      // },
      
      { test: /\.css$/, loader: "style-loader!css-loader" }
      // {test: /\.css$/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'},
      // {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
      // {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&name=./fonts/[hash].[ext]&mimetype=application/font-woff"},
      // {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&name=./fonts/[hash].[ext]&mimetype=application/octet-stream'},
      // {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml'},
      // {test: /\.(jpe?g|png|gif|svg)$/i, loader:'file?limit=100000&name=./imgs/[hash].[ext]'},
      // {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
    ]
  },
  plugins:[],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },

}