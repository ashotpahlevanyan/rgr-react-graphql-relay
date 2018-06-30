const path = require('path');
const babelRelayPlugin = require('./babelRelayPlugin');

module.exports = {
	mode: 'development',
	entry: {
		app: ["./src/App.js"]
	},
	output: {
		path: path.resolve(__dirname, './public/js'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react', 'es2015', 'stage-0']
				},
			}
		],

	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: 'initial',
					test: path.resolve(__dirname, 'node_modules'),
					name: 'vendor',
					enforce: true,
				},
				app: {
					chunks: 'initial',
					test: 'app',
					name: 'app',
					enforce: true,
				},
			},
		},
	},
	devtool: "cheap-module-source-map"
};