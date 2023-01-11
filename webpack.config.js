const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { EntryOptionPlugin } = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env', '@babel/react']
                }
            }   
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dev',
            template: './public/index.html'
        }),
    ],
    devServer: {
        // static: {
    
        //     directory: path.join(__dirname, 'public'),
        //   },
        static: {
            publicPath: '/',
            directory: path.join(__dirname)
        },
    
        port: 8080,
        compress: true,
        proxy: {
        '/**':{
            target: 'http://localhost:3000', 
            secure: false
        },
        }
        },
        
    }
