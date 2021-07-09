const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/scripts/index.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Restaurant",
			template: "./src/scripts/index.html",
		}),
	],
};