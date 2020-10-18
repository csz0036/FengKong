const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            }
        },
        devServer: {
            disableHostCheck: true
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "./src/style.scss";'
            }
        }
    },
    lintOnSave: undefined
};