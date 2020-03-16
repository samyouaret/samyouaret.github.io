const path = require("path")

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "/src/js/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/public/build/js/"),
        publicPath: '/'
    },
    module: {
        rules: [
            {
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
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
}