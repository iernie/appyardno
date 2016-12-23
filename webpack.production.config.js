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
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: ['babel-loader'],
				query: {
					presets: ['react', 'es2015', 'stage-0']
				}
			},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-convertValues&-autoprefixer')
      },
			{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-convertValues&-autoprefixer!postcss-loader!less-loader')
      },
      {
        test: /\.(png|jpg|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9=\.]+)?$/,
        loader: 'file-loader'
      }
			]
		},
		postcss() {
      return [autoprefixer({ remove: false, browsers: ['> 1%', 'Firefox ESR', 'ie >= 9', 'last 2 versions', 'Safari >= 7'] })];
    }
};
