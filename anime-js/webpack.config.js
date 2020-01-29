var html_webpack = require("html-webpack-plugin");

module.exports = {
    entry:'./src/index.js',
    output:{
        path:__dirname+'/dist/',
        filename:'[name].bundle.js'
    },
    plugins:[
        new html_webpack({
            template:"./src/index.html"
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: __dirname+'/dist/',
        compress: true,
        port: 9000
    }
}