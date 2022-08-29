// shared config (dev and prod)
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          "style-loader", {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        }, 
        "sass-loader"
      ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "../index.html.ejs" })],
};
