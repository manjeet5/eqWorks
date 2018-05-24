const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	output: {
		filename: '[name].dev.bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
	},
	devServer: {
		inline: true,
		contentBase: './js',
		port: '3001',
		historyApiFallback: true,
	},

});
