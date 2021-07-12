const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "production",
	entry: {
		index: "./src/scripts/index.js",
	},
	output: {
		path: path.resolve(__dirname, "docs"),
		filename: "[name].bundle.js",
		library: "myLibrary",
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Pond5 | Home",
			favicon: "./src/images/favicon.ico",
			template: "./src/index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};