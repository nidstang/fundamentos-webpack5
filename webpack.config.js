const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name].[contenthash].js',
    },

    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },

        splitChunks: {
            chunks: 'all', // default: async. initial | async | all
            minSize: 0,

            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: (mod) => {
                        const packageName = mod.context.match(/[\\/]node_modules[\\/](.*?)[\\/]|$/)[1];

                        return `npm.${packageName}`;
                    }
                }

                // vendors: {
                //     name: 'vendors',
                //     priority: 1,
                //     test: /[\\/]node_modules[\\/]/,
                // },

                // react: {
                //     name: 'react',
                //     priority: 2,
                //     test: /[\\/]node_modules[\\/](react|react-dom)/,
                // },

                // asyncModules: {
                //     chunks: 'async',
                //     name: 'dynamic',
                // },
            }
        }
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
                    argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
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

        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
        }),
    ],
});