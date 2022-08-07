const commonConfig = require('./webpack.common');
const {merge} = require('webpack-merge');

const devConfig = {
mode: 'production',
entry: './src/index.jsx',
}

module.exports = merge(commonConfig, devConfig);