const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HashInfoPlugin = require('./plugins/HashInfoPlugin');

module.exports = (env, argv) => ({
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name].[contenthash].js',
    },

    optimization: {
        splitChunks: {
            chunks: 'all',

            minSize: 0, // ultimo
            maxInitialRequests: Infinity,

            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                        name: module => {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                            return `npm.${packageName}`;
                        },
                }
                // vendors: {
                //     minSize: 1000, // el tamaño minimo para que se cree un chunk
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
                //     // minSize: 0,
                //     name: 'dynamic',
                //     chunks: 'async',
                // }

                // react: {
                //     name: 'react',
                //     priority: 2,
                //     test(module) {
                //         return module.resource.includes('react');
                //     }
                // }
            }
        },

        runtimeChunk: {
            name: 'runtime',
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

            // {
            //     test: /\.(png|ttf)$/,
            //     type: 'asset/inline', // no genera ninguno
            // }

            {
                test: /\.png$/,
                type: 'asset' // solo mete el logo
            },

            // {
            //     test: /\.png$/,
            //     type: 'asset/inline'
            // },
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

    // devtool: 'eval-cheap-source-map', // development: build ok, rebuild fast -> transformed code, buena info stack
    // devtool: 'eval-cheap-module-source-map', // development: build slow, rebuild fast -> original code
    // devtool: 'hidden-source-map', // production: build slowest, rebuild slowest -> se carga pero no se referencia
    // devtool: 'source-map', // production: build slowest, rebuild slowest -> genera fichero aparte

    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: path.resolve('index.html'),
            // scriptLoading: 'blocking',
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'assets/*',
                    to: 'files/[name].[contenthash].[ext]',
                    context: 'src/'
                }
            ]
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),

        // new HashInfoPlugin({
        //     fileName: 'data.json',
        // }),
    ],
});