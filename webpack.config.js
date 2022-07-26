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
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
};