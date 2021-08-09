const path = require("path");
module.exports = {
  mode: "production",
  devtool: "eval-source-map",
  // entry file
  entry: path.resolve(__dirname, "script/index.js"),

  // module: {
  //   rules: [
  //     {
  //       test: /\.ts$/,
  //       use: "ts-loader",
  //       include: [path.resolve(__dirname, "srcipt")],
  //     },
  //   ],
  // },
  resolve: {
    extensions: [".js"],
  },

  // output file
  output: {
    publicPath: "public",
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"), // absolute path
  },
};
