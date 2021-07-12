const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
	entry: {
		index: "./src/scripts/index.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
		library: "myLibrary",
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Pond5",
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