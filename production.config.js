/**
 * Created by rouven on 11.04.17.
 */

const webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/lib',
        filename: 'index.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
