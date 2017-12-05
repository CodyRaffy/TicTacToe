module.exports = {
  entry: './src/js/index.js',
  output: {
        filename: "./dest/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query:{presets:['es2015']} },
    ]
  }
};