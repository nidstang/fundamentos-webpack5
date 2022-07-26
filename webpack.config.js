const path = require('path');

module.exports = {
    entry: path.resolve('src', 'modules', 'module1.js'),
    // entry: {

    //     // module1: {
    //     //     import: path.resolve('src', 'modules', 'module1.js'),
    //     //     dependOn: 'vendor'
    //     // },
    //     // module2: {
    //     //     import: path.resolve('src', 'modules', 'module2.js'),
    //     //     dependOn: 'vendor'
    //     // },
    //     // vendor: ['lodash'],
    // },

    output: {
        // filename: '[name].[contenthash].js',
        filename: '[name].js',
    },
};