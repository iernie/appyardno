const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	debug: true,
	devtool: 'eval',
	resolve: {
	    root: [
        path.join(__dirname, 'app'),
				path.join(__dirname, 'static')
      ],
	    extensions: ['', '.js', '.jsx', '.less']
  	},
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
		'./index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'http://localhost:3000/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: 'true'
    }),
    new HtmlWebpackPlugin({
      template: 'index-template.html',
      filename: '../index.html',
      hash: false,
      devMode: true,
      inject: false
    }),
    new ExtractTextPlugin('bundle.css', { allChunks: false })
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
        include: /(app|index.js)/,
				loaders: ['babel']
			},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-convertValues&-autoprefixer&sourceMap')
      },
			{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-convertValues&-autoprefixer&sourceMap!postcss-loader!less-loader?sourceMap')
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
