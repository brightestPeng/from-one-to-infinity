const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:"./src/index.ts",
  mode:"development",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:'[name].bundle.js'
  },
  devServer:{
    hot:true,
    port:4000
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        loader:"ts-loader",
        exclude:/node_modules/
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.resolve(__dirname,"./public/index.html")
    })
  ],
  resolve:{
    extensions:[".tsx",".ts",".js"]
  }
}