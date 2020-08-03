const { resolve } = require('path');
module.exports = {
  entry: './src/node2Symbol.ts',
  mode: 'production',
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
  },
  output: {
    path: resolve(__dirname, './resources'),
    filename: 'node2Symbol.bundle.js',
    library: 'node2Symbol',
  },
};
