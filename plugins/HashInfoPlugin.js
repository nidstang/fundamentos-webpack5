module.exports = class HashInfoPlugin {
    constructor(options) {
        this.debug = options.debug;
    }

    apply(compiler) {
        console.log('debug mode', this.debug);

        compiler.hooks.thisCompilation.tap('HashInfoPlugin', compilation => {
            compilation.hooks.processAssets.tap({ name: 'HashInfoPlugin ' }, assets => {

                for(const asset of compilation.assetsInfo.keys()) {
                    console.log(`${asset} -> ${compilation.assetsInfo.get(asset).contenthash}`);
                }
            });
       });
    }
}