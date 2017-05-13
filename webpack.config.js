module.exports = {
    entry: './app/App.jsx',
    output: {
        path: [__dirname,'public'].join('/'),
        filename: 'bundle.js'
    },
     module: {
         loaders: [{
             test: /\.jsx$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
};
