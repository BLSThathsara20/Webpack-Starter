const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	entry: {
		main: "./src/js/index.js",
		styles: "./src/styles/main.scss",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		clean: true,
		publicPath: "/",
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
		splitChunks: {
			chunks: "all",
			minSize: 20000,
			minChunks: 1,
			cacheGroups: {
				vendor: {
					test: /[\/]node_modules[\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								quietDeps: true,
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new CompressionPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: true,
		}),
		...(process.env.ANALYZE ? [new BundleAnalyzerPlugin()] : []),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		...(process.env.ANALYZE ? [new BundleAnalyzerPlugin()] : []),
	],
	devtool:
		process.env.NODE_ENV === "production" ? "source-map" : "eval-source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 3000,
		hot: true,
		historyApiFallback: true,
	},
	performance: {
		hints: process.env.NODE_ENV === "production" ? "warning" : false,
	},
};
