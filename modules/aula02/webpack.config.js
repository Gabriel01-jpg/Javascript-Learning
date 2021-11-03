const path = require('path');

module.exports = {
    mode: 'production', // modo - entre desenvolvimento e produção - development e production
    entry: './src/index.js', // entry: arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'public/assets/js'), // arquivo de saída
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
}