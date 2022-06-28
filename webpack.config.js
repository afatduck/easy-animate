const path = require('path');
const BundleDeclarationsWebpackPlugin = require('bundle-declarations-webpack-plugin');

module.exports = {
    mode: 'production',
    name: 'easy-animate',
    entry: {
        main: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'EasyAnimate',
        libraryTarget: 'umd',
        filename: 'index.min.js',
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new BundleDeclarationsWebpackPlugin()
    ]
}