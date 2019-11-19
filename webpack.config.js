const path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/src/js/"),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    "presets": [
                        "@babel/env",
                        "@babel/react"
                    ]
                }
            }
        }]
    },
    devServer: {
        historyApiFallback: true,
    },

    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: 'index.html'
    //     })
    // ]
}