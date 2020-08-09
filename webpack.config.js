const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports ={
entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer:{
  	port:3000,
  	historyApiFallback:true,
    headers: { "Access-Control-Allow-Origin": "*" },


  },

   module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
       {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'images',
        },
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'})
  ]
}