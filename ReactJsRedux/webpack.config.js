var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		helloWorld: "./ReactScripts/HelloWorld/index.js",
		helloWorldAjax: "./ReactScripts/HelloWorldAjax/index.js",
		register: "./ReactScripts/Register/index.js",
		registerImmutable: "./ReactScripts/RegisterImmutable/index.js",
		registerJest: "./ReactScripts/RegisterJest/index.js",
		textField: "./ReactScripts/TextField/index.js",
		textFieldError: "./ReactScripts/TextFieldError/index.js",
		route: "./ReactScripts/Route/index.js"
	},
	output: {
		path: __dirname + '/Scripts/dist/',
		filename: "[name].bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ["react", "es2015", "stage-3"],
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ["react", "es2015", "stage-3"],
				}
			}
		]
	}
};