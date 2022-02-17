const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: "src/examples/main.ts",
      template: "public/index.html",
      filename: "index.html"
    }
  },
}