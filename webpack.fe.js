const path = require('path');
const package = require('./package.json');
const base = require('./webpack.config');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = (env) => {
    const config = base(env);

    return {
        entry: path.resolve('./src/mfe.js'), 
        output: config.output,
        module: config.module,
        resolve: config.resolve,
        extensions: config,

        plugins: [
            new ModuleFederationPlugin({
                name: 'host',
                filename: 'hostEntry.js',

                remotes: {
                    toset: 'toset',
                },

                shared: {
                    react: {
                        singleton: true,
                        requiredVersion: package.dependencies.react,
                    },

                    'react-dom': {
                        singleton: true,
                        requiredVersion: package.dependencies['react-dom'],
                    }
                }
            })

        ]
    }
}