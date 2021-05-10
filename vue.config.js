// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
    runtimeCompiler: true,
    transpileDependencies: ['vuex-module-decorators'],
    configureWebpack: {
        resolve: {
            alias: {
                "@common": path.resolve(__dirname, '/src')
            }
        }
    }
}
