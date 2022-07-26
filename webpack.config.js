const path = require('path');

module.exports = {
    entry: path.resolve('src', 'app.js'),

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
    }
};