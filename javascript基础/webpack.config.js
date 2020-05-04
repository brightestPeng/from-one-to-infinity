const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry:path.resolve(__dirname,"src/index.js"),
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"[name].bundle.js"
  },
  mode:"development",
  devServer:{
    hot:true,
    port:3006
  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.resolve(__dirname,"public/index.html")
    })
  ]
}