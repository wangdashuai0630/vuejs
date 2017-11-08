/**
 * Created by aaa on 2017/11/3.
 */
var webpack = require('webpack');
//var ET = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/app.js',

  output: {
    path: __dirname + '/prd/',
    // filename: 'bundle-[hash].js'
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },

      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015'
        // loader: 'babel-loader',
        // query: {
        //   "presets": ['es2015']
        // }
      },

      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
        //loader: ET.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },

  devServer: {
    contentBase: __dirname + '/prd',
    port: 8080,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    // new ET({
    //     filename:'/style.css',
    //     allChunks:true
    //   })
  ]
}
