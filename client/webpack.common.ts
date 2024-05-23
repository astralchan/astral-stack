import { type Configuration } from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const common: Configuration = {
  entry: {
    index: './src/index.tsx',
    main: './src/routes/Main.tsx',
    about: './src/routes/About.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpe?g|png|svg|gif)/i,
        type: 'asset'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.svg'
    }),
    new MiniCssExtractPlugin()
  ]
};

export default common;
