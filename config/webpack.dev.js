const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    stats: 'errors-only',
    devServer: {
        port: 3000,
        compress: false
    },
});