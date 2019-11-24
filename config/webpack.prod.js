const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
});