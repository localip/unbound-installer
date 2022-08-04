const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

module.exports = {
   target: 'electron-renderer',
   module: {
      rules: [...rules, {
         test: /\.css$/,
         use: ['style-loader', 'css-loader'],
      }],
   },
   plugins: plugins,
   resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
      plugins: [new TsconfigPathsPlugin()]
   },
};
