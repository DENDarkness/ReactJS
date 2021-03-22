const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: 'bundle.js',
        //    publicPath: '/static/build/',
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', ['@babel/preset-react',
                        {
                            runtime: 'automatic',
                        },
                    ], ],
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            {
                                "loose": true
                            },
                        ],
                    ],
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],

            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ReactJS App',
            template: 'index.html',
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'static', 'build'),
        compress: true,
        port: 9000,
    },
    devtool: 'inline-source-map',
};