const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
   entry: './src/main/index.ts',
   target: 'electron-main',
   module: {
      rules: require('./webpack.rules'),
   },
   resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
      plugins: [new TsconfigPathsPlugin()]
   },
};
