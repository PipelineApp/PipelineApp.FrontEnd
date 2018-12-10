const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const utils = require('./utils');

const BUILD_DIR = path.resolve(__dirname, 'build');

const extractCSS = new MiniCssExtractPlugin({ filename: '[name].fonts.css' });
const extractSCSS = new MiniCssExtractPlugin({ filename: '[name].styles.css' });

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: BUILD_DIR,
		compress: true,
		hot: true,
		open: true,
		overlay: true
	},
	watchOptions: {
		poll: true,
		ignored: /node_modules/
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin(utils.generateDefineConfig(false)),
		extractCSS,
		extractSCSS,
		new webpack.HotModuleReplacementPlugin()
	]
});
