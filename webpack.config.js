const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve('src', 'app.js'),

    output: {
        filename: 'main.[contenthash].js',
    }, 

    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    }
                }
            },

            {
                test: /\.tsx$/,
                use: 'ts-loader',
            },

            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },

            {
                test: /\.(ttf|png)$/,
                type: 'asset' // asset/resource | asset/inline, asset. asset/source
            },

            {
                test: /\.txt$/,
                type: 'asset/source',
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.tsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'ToSet',
            template: path.resolve('index.html'),
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: '*.txt', // default: output.path
                    to: 'files/[name].[contenthash].txt',
                    context: 'src/',
                }
            ]
        }),
    ]
};