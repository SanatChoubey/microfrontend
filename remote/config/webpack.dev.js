const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const packageMeta = require('../package.json');
const commonConfig = require('./webpack.common');
const {merge} = require('webpack-merge');
const devConfig = {
mode: 'development',
plugins: [
    new ModuleFederationPlugin({
        name: 'my_remote_app',
        filename: 'remoteEntry.js',
        exposes: {
            './remote': './src/bootstrap'
        },
        shared: packageMeta.dependencies
    })
]
}

module.exports = merge(commonConfig, devConfig);