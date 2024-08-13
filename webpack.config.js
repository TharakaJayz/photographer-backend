import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.ts", // Your TypeScript entry point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Corrected path to dist directory
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply loader to all TypeScript files
        use: "ts-loader", // Use the ts-loader for TypeScript files
        exclude: /node_modules/, // Exclude the node_modules directory
      },
    ],
  },
  mode: "development", // Set the mode to 'development' or 'production'
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      assert: require.resolve("assert"),
      buffer: require.resolve("buffer"),
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
      fs: false, // or require.resolve("fs-extra") if needed
      util: require.resolve("util"),
      zlib: require.resolve("browserify-zlib"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      url: require.resolve("url"),
      string_decoder: require.resolve("string_decoder"),
      querystring: require.resolve("querystring-es3"),
    },
  },
};
