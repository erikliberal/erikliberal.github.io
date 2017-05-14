var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
      "bundle":path.join(__dirname,'app','App.jsx')
    },
    output: {
        path:  path.join(__dirname,'public'),
        filename: '[name].js'
    },
     module: {
         loaders: [{
             test: /\.jsx$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     },
     plugins:[
       new CopyWebpackPlugin([
          {context:"pages", from: '**/*', to: ''},
          {context:"stylesheets", from: '**/*', to: ''},
          {from: 'images/**/*', to:''},
          {from: 'data/**/*', to:''},
          {context: path.join('node_modules','superagent'), from:'superagent.js', to:''}
/*
superagent.get('data/posts.json').end(function(err,resp){
  console.log(err);
  console.log(resp.body);
});
*/
       ], {
         copyUnmodified:true
       })
     ]
};
