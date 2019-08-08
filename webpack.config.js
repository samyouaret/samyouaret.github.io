const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/src/js/")
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
    }
}