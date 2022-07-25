const { RawSource } = require('webpack-sources');

module.exports = class HashInfoPlugin {

    constructor(options) {
        this.fileName = options.fileName;
    }

    apply(compiler) {
        compiler.hooks.thisCompilation.tap('HashInfoPlugin', compilation => {

            compilation.hooks.processAssets.tap({
                name: 'HashInfoPlugin',
            }, assets => {

                // ejemplo para el consolo log
                //borrar luego
                for (const asset of compilation.assetsInfo.keys()) {
                    console.log(`${asset} -> ${compilation.assetsInfo.get(asset).contenthash}`);
                }

                const source = Array.from(compilation.assetsInfo).reduce((txt, [k, v]) => {
                    return `${txt}\n"${k}":"${v.contenthash}",`;
                }, '');

                const JSONSource = `{${source.slice(0, -1)}}`; // remove last comma
                // empezamos en 0 y borramos el último (borrando empezando por atras)

                compilation.emitAsset(this.fileName || '', new RawSource(JSONSource));
            });
        });
    }
};