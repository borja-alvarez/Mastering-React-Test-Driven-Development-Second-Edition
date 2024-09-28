const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: "/node_modules/",
            loader: "ts-loader"
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx"]
    }
}