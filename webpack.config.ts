import { resolve } from 'path';
import { Configuration } from 'webpack';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const r = (...p: string[]) => resolve(__dirname, ...p);

const config: Configuration = {
  entry: r('src/index.tsx'),
  output: {
    path: r('dist'),
    filename: 'script_[fullhash].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    serveIndex: true,
  },
};

export default config;
