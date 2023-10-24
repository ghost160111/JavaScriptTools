const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const disableExtensions = (...extensions) => {
  if (extensions) {
    return [...extensions]
  }
}

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all"
    }
  }

  if (isProd) {
    config.minimizer = [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin(),
    ]
  }

  return config;
}

const fileName = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

const cssLoader = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    "css-loader"
  ]

  if (extra) {
    loaders.push(extra);
  }
  
  return loaders;
}

const babelOptions = (option) => {
  const options = {
    presets: ["@babel/preset-env"]
  }

  if (option) {
    options["presets"].push("@babel/preset-typescript");
  }

  return options;
}

module.exports = {
  context: path.resolve(__dirname, "lib"),
  mode: "development",
  entry: {
    main: "./index.js",
  },
  output: {
    filename: fileName("js"),
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: disableExtensions(".js", ".ts"),
    alias: {
      "@": path.resolve(__dirname, "lib")
    }
  },
  optimization: optimization(),
  devtool: isDev ? "source-map" : false,
  devServer: {
    port: 5128
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./index.html"
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: "assets/images", to: "assets/images" }
    //   ]
    // }),
    new MiniCssExtractPlugin({
      filename: fileName("css")
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: cssLoader()
      },
      {
        test: /\.(sass|scss)$/i,
        use: cssLoader("sass-loader")
      },
      {
        test: /\.(js|mjs)$/i,
        exclude: "/node_modules",
        use: {
          loader: "babel-loader",
          options: babelOptions()
        }
      },
      {
        test: /\.ts$/i,
        exclude: "/node_modules",
        use: {
          loader: "babel-loader",
          options: babelOptions("ts")
        }
      }
    ],
  }
}