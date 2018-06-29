module.exports = {
	mode: 'development',
	entry: "./public/js/app.js",
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react', 'es2015'],
				},
			}
		]
	}
};