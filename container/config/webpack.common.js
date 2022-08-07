const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry: './src/index.js',
devtool: 'inline-source-map',
output: {
path: path.join(__dirname, '/dist'),
filename: 'bundle.js'
},
devtool: 'inline-source-map',
devServer: {
    port: 8080,
},
module: {
rules: [
{
test: /\.jsx?$/,
exclude: /node_modules/,
loader: 'babel-loader'
},
{
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
    },
    
]
},
resolve: {
extensions: ['.jsx', '.ts', '.js'],
},
plugins:[
new HtmlWebpackPlugin({
template: './public/index.html'
})
]
}