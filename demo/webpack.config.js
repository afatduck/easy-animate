const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'index.ts')
    },
    watch: true,
    output: {
        path: path.resolve(__dirname),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, '../src'), path.resolve(__dirname)]
            }
        ]
    }
}