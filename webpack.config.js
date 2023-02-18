const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', '@babel/preset-react' ],
                        plugins: [
                            [ '@babel/plugin-proposal-class-properties', { loose: true } ],
                            [ '@babel/plugin-proposal-private-methods', { loose: true } ],
                            [ '@babel/plugin-proposal-private-property-in-object', { loose: true } ]
                        ]
                    }
                }
            }
        ]
    }
    ,
    plugins: [
        new HtmlWebpackPlugin( {
            template: './src/index.html'
        } )
    ]
};