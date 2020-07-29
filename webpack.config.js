module.exports = {
  entry: './src/node2Symbol.ts',
  mode: 'production',

  output: {
    filename: 'node2Symbol.bundle.js',
    library: 'node2Symbol',
  },
};
