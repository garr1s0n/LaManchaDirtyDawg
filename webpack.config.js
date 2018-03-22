const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    devtool: 'source-map',
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
            favicon: 'favicon.ico'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
           {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
           },
            {
                test: /\.js$/,
                use: ['babel-loader?presets[]=es2015']
            }
        ]
    }
}