/**
 * Created by rouven on 11.04.17.
 */

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
    debug: true,
    devtool: 'source-map'
};
