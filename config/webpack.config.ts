import {
  DEV_PORT,
  PROD_PORT,
  PROD_DEVTOOL,
  DEV_DEVTOOL,
  MY_COPY_FOLDERS,
  MY_CLIENT_PLUGINS,
  DEV_BACKEND_URL,
  PROD_BACKEND_URL,
  MY_CLIENT_PRODUCTION_PLUGINS,
  MY_CLIENT_DEVSERVER_PLUGINS,
  MY_CLIENT_RULES,
  SHOW_BUNDLE_ANALYZER,
  EXCLUDE_SOURCE_MAPS
} from './constants';
import { DefinePlugin } from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { root } from './helpers.js';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const EVENT = process.env.npm_lifecycle_event || '';
const DEV_SERVER = EVENT.includes('webdev');
const PROD = EVENT.includes('prod');

const PORT = PROD ? PROD_PORT : DEV_PORT;
const ENV = PROD ? 'production' : 'development';
const BACKEND_URL = PROD ? PROD_BACKEND_URL : DEV_BACKEND_URL;

console.log('PRODUCTION BUILD: ', PROD);
console.log('TEST BUILD: ', false);

/**
 * Logic for copying folders
 */
const COPY_FOLDERS = (() => {
  const folders = MY_COPY_FOLDERS;

  if (!DEV_SERVER) {
    folders.unshift({ from: root('src/index.html') });
  }

  return folders;
})();

/**
 * Variables to be exposed in runtime
 */
const CONSTANTS = {
  DEV_SERVER: DEV_SERVER,
  ENV: JSON.stringify(ENV),
  PORT: PORT,
  BACKEND_URL: JSON.stringify(BACKEND_URL),
};

/**
 * Config
 */
const outputConfig = (function webpackConfig(): WebpackConfig {
  let config: WebpackConfig = Object.assign({});

  config.mode = ENV;
  config.cache = true;
  config.target = 'web';
  config.devtool = PROD ? PROD_DEVTOOL : DEV_DEVTOOL;
  config.entry = {
    main: root('src/app.tsx'),
  };

  config.output = {
    path: root('dist'),
    filename: 'bundle.js',
  };

  config.devServer = {
    contentBase: root('src'),
    port: PORT,
    historyApiFallback: {
      disableDotRule: true,
    },
    stats: 'minimal',
    host: '127.0.0.1',
    disableHostCheck: true,
    watchOptions: {
      poll: undefined,
      aggregateTimeout: 300,
      ignored: /node_modules/
    }
  };

  config.performance = {
    hints: false,
  };

  config.resolve = {
    extensions: ['.ts', '.js', '.json', '.tsx']
  };

  config.module = {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, 'src/**/*spec.ts*']
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [EXCLUDE_SOURCE_MAPS],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: [/node_modules/, 'src/**/*spec.ts*']
      },
      {
        type: 'javascript/auto',
        test: /\.json/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]' },
          },
        ],
      },
      { test: /\.html/, loader: 'raw-loader', exclude: [root('src/index.html')] },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      ...MY_CLIENT_RULES
    ]
  };

  config.plugins = [
    new DefinePlugin(CONSTANTS),
    new CopyWebpackPlugin(COPY_FOLDERS),
    ...MY_CLIENT_PLUGINS
  ];

  if (SHOW_BUNDLE_ANALYZER) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  if (PROD) {
    config.plugins.concat(MY_CLIENT_PRODUCTION_PLUGINS);
  }
  
  if (DEV_SERVER) {
    config.plugins.concat(MY_CLIENT_DEVSERVER_PLUGINS);
  }

  return config;
})();

module.exports = outputConfig;
