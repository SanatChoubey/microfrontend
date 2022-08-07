const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const packageMeta = require('../package.json');
const commonConfig = require('./webpack.common');
const {merge} = require('webpack-merge');
const devConfig = {
mode: 'development',
plugins: [
    new ModuleFederationPlugin({
        name: 'container',
        remotes: {
            'remote': 'my_remote_app@http://localhost:8081/remoteEntry.js'
        },
        // shared: packageMeta.dependencies
    })
]
}

module.exports = merge(commonConfig, devConfig);