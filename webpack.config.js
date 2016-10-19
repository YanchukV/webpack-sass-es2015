var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index',
		'./src/sass/main.sass'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'js/bundle.min.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('css/styles.min.css', {
			allChunks: true
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			comments: false,
			compress: {
				sequences     : true,
				booleans      : true,
				loops         : true,
				unused      : true,
				warnings    : false,
				drop_console: true,
				unsafe      : true
			}
		})
	],
	module: { //Обновлено
		loaders: [ //добавили babel-loader
			{
				loaders: ['babel-loader'],
				include: [
					path.resolve(__dirname, "src"),
				],
				test: /\.js$/,
				plugins: ['transform-runtime'],
			},
			{
				test: /\.sass$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
				loader: 'file-loader'
			}
		]
	}
};