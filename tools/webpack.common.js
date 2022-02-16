/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, '..', 'src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  output: {
    publicPath: '/',
  },
  plugins: [
    new webpack.ProgressPlugin({
      activeModules: false,
      entries: true,
      modules: true,
      modulesCount: 5000,
      profile: false,
      dependencies: true,
      dependenciesCount: 10000,
      percentBy: null,
    }),
    new webpack.EnvironmentPlugin([]),
    new webpack.DefinePlugin({
      MODE: `'${process.env.MODE}'`,
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
