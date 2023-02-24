const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    resolve: {
        extensions: [ ".ts", '.tsx', '.js', '.jsx' ]
    },
    entry: './src/index.tsx',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        chunkFilename: "[id].[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
    ,
    plugins: [
        new HtmlWebpackPlugin( {
            template: './public/index.html'
        } )
    ]
};