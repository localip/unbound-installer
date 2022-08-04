module.exports = [
   {
      test: /native_modules\/.+\.node$/,
      use: 'node-loader',
   },
   {
      test: /\.(ts)x?$/,
      exclude: /node_modules/,
      use: {
         loader: 'babel-loader',
         options: {
            presets: ['@babel/preset-env', 'solid', '@babel/preset-typescript'],
            plugins: [
               '@babel/plugin-syntax-dynamic-import',
               '@babel/plugin-proposal-class-properties',
               '@babel/plugin-proposal-object-rest-spread',
            ],
         },
      },
   },
   {
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
   },
];
