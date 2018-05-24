const webpack = require('webpack');
const merge = require('webpack-merge');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');
/*
use: ExtractTextPlugin.extract({
	fallback: 'style-loader',
	use: ['css-loader']
})
*/
module.exports = merge(common, {
	devtool: 'source-map',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build'),

	},
	plugins: [

		new webpackUglifyJsPlugin({
			cacheFolder:`${__dirname}/build/public/cached_uglify/`,
			debug: true,
			minimize: true,
			sourceMap: false,
			output: {
				comments: false
			},
			compressor: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),

	]
});

/*
// Extract imported CSS into own file
new ExtractTextPlugin({
	filename: 'test.css',
	allChunks: true
}),
// Minify CSS
new webpack.LoaderOptionsPlugin({
	minimize: true,
}),*/
