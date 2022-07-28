const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HashInfoPlugin = require('./plugins/HashInfoPlugin');

module.exports = (env, argv) => {
    return {
        // mode: 'development', // none | development | production
        entry: path.resolve('src', 'app.js'),

        output: {
            filename: 'main.[contenthash].js',
        }, 

        devServer: {
            port: 3000,
            client: {
                overlay: false,
            }
        },

        module: {
            rules: [
                {
                    test: /\.(jsx|js)$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env'],
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
                        argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
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
            extensions: ['.js', '.jsx', '.tsx'],

            alias: {
                components: path.resolve('src', 'components'),
                mood$: path.resolve('src', 'components', 'SelectMood.jsx'),
            }

        },

        plugins: [
            new HtmlWebpackPlugin({
                title: 'ToSet',
                template: path.resolve('index.html'),
            }),

            new MiniCssExtractPlugin({
                filename: 'styles.[contenthash].css'
            }),

            // new CopyWebpackPlugin({
            //     patterns: [
            //         {
            //             from: '*.txt', // default: output.path
            //             to: 'files/[name].[contenthash].txt',
            //             context: 'src/',
            //         }
            //     ]
            // }),

            // new HashInfoPlugin({
            //     debug: true
            // }),
        ]
    }
};