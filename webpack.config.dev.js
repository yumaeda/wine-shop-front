const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const TSLintPlugin = require('tslint-webpack-plugin');
const MODE = 'development';

module.exports = [
{
    mode: MODE,
    entry: './src/index.tsx',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json' ]
    },
    plugins: [
        new TSLintPlugin(
        {
            files: [ './src/**/*.ts', './src/**/*.tsx' ]
        })
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api/v1': {
                target: 'http://localhost:3000/api/v1',
                secure: false
            }
        }
    }
},
{
    mode: MODE,
    entry: {
        style: './src/scss/index.scss'
    },
    output: {
        filename: 'index.css',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader:  ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css'),
    ],
}];
