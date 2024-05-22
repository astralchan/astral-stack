import { type Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';
import CompressionPlugin from 'compression-webpack-plugin';

export default merge<Configuration>(common, {
  mode: 'production',
  output: {
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0
    }
  },
  plugins: [new CompressionPlugin()]
});
