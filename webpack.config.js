module.exports ={
  entry: [
    './src/index.js'
  ],
  output:{
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
  loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets:['react','latest','stage-3']
      }
    }]
  },
  resolve:{
    extensions: ['.js','.jsx']
  },
  devServer:{
    historyApiFallback: true,
    contentBase: './'
  }
};
