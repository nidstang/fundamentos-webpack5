const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name].[contenthash].js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },

            {
                test: /\.tsx$/,
                use: 'ts-loader'
            },

            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },

            {
                test: /\.txt$/,
                type: 'asset/source',
            },

            {
                test: /\.png$/,
                type: 'asset', 
            },
        ]
    },

    resolve: {
        extensions: ['.jsx', '.tsx', '.js'],
        alias: {
            '@components': path.resolve('src', 'components'),
            series$: path.resolve('src', 'components', 'Series.jsx'),
        }
    },

    devServer: {
        static: path.resolve('dist'),
        client: {
            overlay: false,
        },

        port: 3000,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: path.resolve('index.html'),
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
        }),
    ],
});