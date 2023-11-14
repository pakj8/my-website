const path = require("path");

module.exports = {
  module: {
    rules: [{ test: /\.gltf$/, use: "file-loader" }],
  },
};
