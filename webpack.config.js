const path = require('path');
module.exports = {
    entry: './src/download.ts',
    output: {
        filename: 'download.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: ['web', 'es5'],
    module: {
        rules: [{
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },
    resolve: {
        extensions: ['.ts'],
    },
};
