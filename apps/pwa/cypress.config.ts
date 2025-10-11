import webpackPreprocessor from '@cypress/webpack-preprocessor';
import { defineConfig } from 'cypress';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // 👇 Create webpack config that understands TS paths
      const webpackOptions = {
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
          plugins: [
            new TsconfigPathsPlugin({
              configFile: path.resolve(__dirname, './tsconfig.json'), // PWA tsconfig
            }),
          ],
        },
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'ts-loader',
                  options: {
                    transpileOnly: true,
                  },
                },
              ],
            },
          ],
        },
      };

      on(
        'file:preprocessor',
        webpackPreprocessor({
          webpackOptions,
        }),
      );

      return config;
    },
    baseUrl: 'http://localhost:3000',
  },
});
