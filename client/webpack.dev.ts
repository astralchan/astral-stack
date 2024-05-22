import { type Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import 'webpack-dev-server';
import common from './webpack.common';

export default merge<Configuration>(common, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    historyApiFallback: true,
    compress: true
  }
});
