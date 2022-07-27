const path = require('path');

module.exports = {
    entry: {
        module1: path.resolve('src', 'modules', 'module1.js'),
        module2: path.resolve('src', 'modules', 'module2.js'),
    },

    output: {
        filename: '[name].[contenthash].js',
    }
};