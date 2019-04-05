const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/assets/",
  },
  serve: { //object
    port: 1337,
    content: './dist'
  }
}