const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	debug: false,
	resolve: {
    root: [
      path.join(__dirname, 'app'),
			path.join(__dirname, 'static')
    ],
	    extensions: ['', '.js', '.jsx', '.less']
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
    new HtmlWebpackPlugin({
      template: 'index-template.html',
      filename: '../index.html',
      hash: false,
      devMode: false,
      inject: true
    }),
    new ExtractTextPlugin('bundle-[hash].css', { allChunks: false })
  ],
	module: {
		loaders: [
			{
				test: /\.jsx?$/i,
				exclude: /(node_modules)/,
				loader: ['babel-loader'],
				query: {
					presets: ['react', 'es2015', 'stage-0']
				}
			},
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-convertValues&-autoprefixer')
      },
			{
        test: /\.less$/i,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-convertValues&-autoprefixer!postcss-loader!less-loader')
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[#a-z0-9=\.]+)?$/i,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader',
          'image-webpack?optimizationLevel=7&interlaced=false'
        ]
      }
			]
		},
		postcss() {
      return [autoprefixer({ remove: false, browsers: ['> 1%', 'Firefox ESR', 'ie >= 9', 'last 2 versions', 'Safari >= 7'] })];
    }
};
