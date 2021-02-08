import { resolve } from 'path';
import { Configuration } from 'webpack';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const r = (...p: string[]) => resolve(__dirname, ...p);

type WebpackEnv = {
  WEBPACK_SERVE?: true;
};

export default (env: WebpackEnv) => {
  const config: Configuration = {
    entry: r('src/index.tsx'),
    output: {
      path: r('dist'),
      filename: 'dist.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [new CleanWebpackPlugin()],
    devServer: {
      serveIndex: true,
      proxy: {
        '/api': 'http://localhost:60021',
        '/images': 'http://localhost:60021',
      },
    },
  };

  if (env.WEBPACK_SERVE) {
    config.plugins?.push(new HtmlWebpackPlugin());
  }

  return config;
};
