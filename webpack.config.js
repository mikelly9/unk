const path = require("path");

const serverConfig = {
  mode: process.env.NODE_ENV,
  target: "node",
  entry: "./src/cli.js",
  output: {
    filename: "cli.js",
    path: path.resolve(__dirname, "dist"),
  },
};

module.exports = [serverConfig];
