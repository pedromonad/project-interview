const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'images/[name][ext]',
    publicPath: '/'
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
    port: 7000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { 'runtime': 'automatic' }],
              '@babel/preset-typescript'
            ],
          }
        }
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),

        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  }
}