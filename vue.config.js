const path = require('path');
const webpack = require('webpack');

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
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    },
    lintOnSave: undefined
};