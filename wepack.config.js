const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test:  /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname),
          publicPath: '/',
        },
        proxy: {
          '/**': {
            target: 'http://localhost:3000',
            secure: false,
          },
        },
        compress: true,
        port: 8080,
      },
    
    mode: process.env.NODE_ENV
}