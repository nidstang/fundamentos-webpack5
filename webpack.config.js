const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HashInfoPlugin = require('./plugins/HashInfoPlugin');

const deps = require('./package.json').dependencies;

module.exports = (env) => ({
    entry: path.resolve(__dirname, 'src', 'bootstrap.js'),
    output: {
        filename: '[name].[contenthash].js',
        publicPath: 'http://localhost:3000/'
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
                    env.pro ? MiniCssExtractPlugin.loader : 'style-loader',
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
                type: 'asset' 
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

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),

        new ModuleFederationPlugin({
            name: 'toset',
            filename: 'remoteEntry.js',

            // toset/Register

            exposes: {
                './Register': './src/components/Register.jsx',
                './Styles': './src/styles.js',
            },

            shared: {
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },

                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                }
            }

        }),
    ],
});