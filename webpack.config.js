const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    public: ["./src/js/index.js", "./src/sass/index.scss"],
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          {
            loader: "file-loader",

            options: {
              name: "[name].css",
              outputPath: "./",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Timo Matthies",
      template: "src/home.html",
      filename: "home.html",
    }),
    new HtmlWebpackPlugin({
      title: "Desgin System",
      template: "src/design-system.html",
      filename: "design-system.html",
    }),
    new HtmlWebpackPlugin({
      title: "My Index",
      template: "src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "About",
      template: "src/about.html",
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      title: "Contact",
      template: "src/contact.html",
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      title: "Projects",
      template: "src/projects.html",
      filename: "projects.html",
    }),
    new HtmlWebpackPlugin({
      title: "Portraits",
      template: "src/portraits.html",
      filename: "portraits.html",
    }),
    new HtmlWebpackPlugin({
      title: "Foto–Karton",
      year: "2017",
      template: "src/fotokarton.html",
      filename: "fotokarton.html",
    }),
    
    new CopyWebpackPlugin({
      patterns: [{
        from: "src/images", to: "images"
      }]
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
