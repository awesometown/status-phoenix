'use strict';

var path = require('path');
var webpack = require('webpack');

function join(dest) { return path.resolve(__dirname, dest); }

function web(dest) { return join('web/static/' + dest); }

module.exports = {
	entry: {
		application: [
			web('js/app.js'),
			web('css/app.css')
		],
	},

	output: {
		path: join('priv/static'),
		filename: 'js/app.js',
	},

	resolve: {
		extensions: ['', '.js'],
		modulesDirectories: ['node_modules'],
	},

	module: {
		loaders: [
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					cacheDirectory: true,
					plugins: ['transform-decorators-legacy'],
					presets: ['react', 'es2015', 'stage-2', 'stage-0'],
				},
			},

			{ test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
		]
	},
	devServer: {
		historyApiFallback: true
	}
}
