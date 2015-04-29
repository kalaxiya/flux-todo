/**
 * Created by linzerui on 15/4/29.
 */
module.exports = {
    entry: './js/main.js',
    output: {
        path: __dirname,
        filename: './js/bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader?harmony'}
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};