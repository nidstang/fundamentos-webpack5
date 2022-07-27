const path = require('path');

module.exports = {
    entry: {
        // module1: path.resolve('src', 'modules', 'module1.js'),
        // module2: path.resolve('src', 'modules', 'module2.js'),
        module1: {
            import: path.resolve('src', 'modules', 'module1.js'),
            dependOn: 'vendor',
        },

        module2: {
            import: path.resolve('src', 'modules', 'module2.js'),
            dependOn: 'vendor',
        },

        vendor: 'lodash',
    }
}