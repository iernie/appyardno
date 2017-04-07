const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	resolve: {
    modules: [
      path.join(__dirname, 'app'),
			path.join(__dirname, 'static'),
      'node_modules'
    ],
	    extensions: ['.js', '.jsx', '.less']
  	},
	entry: [
		'./index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle-[hash].js',
    publicPath: '/dist/'
	},
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      __DEV__: 'false',
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false
    }),
    new HtmlWebpackPlugin({
      template: 'index-template.html',
      filename: '../index.html',
      hash: false,
      devMode: false,
      inject: true
    }),
    new ExtractTextPlugin({
      filename: 'bundle-[hash].css',
      allChunks: false
    })
  ],
  module: {
		rules: [
			{
				test: /\.jsx?$/i,
				exclude: /(node_modules)/,
        include: /(app|index.js)/,
				use: [{
          loader: 'babel-loader'
        }]
			},
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              convertValues: false,
              autoprefixer: false,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'IE 11'] })];
              }
            }
          }]
        })
      },
			{
        test: /\.less$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              convertValues: false,
              autoprefixer: false,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'IE 11'] })];
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }]
        })
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[#a-z0-9=\.]+)?$/i,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader'
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ]
      }
		  ]
		}
};
