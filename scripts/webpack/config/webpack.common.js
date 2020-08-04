// Core
import { DefinePlugin } from 'webpack';
import merge from 'webpack-merge';

// Constants
import { BUILD } from '../constants';

// Modules
import * as modules from '../modules';

/**
 * object
 * function
 * promise
 */
export default () => {
  const { NODE_ENV } = process.env;

  return merge(
    {
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      output: {
        path: BUILD,
        filename: 'js/bundle.[hash:5].js',
        chunkFilename: 'js/bundle.[chunkhash:5].js',
        publicPath: '/',
      },
      plugins: [
        new DefinePlugin({
          __ENV__: JSON.stringify(NODE_ENV),
          __DEV__: JSON.stringify(NODE_ENV === 'development'),
          __STAGE__: JSON.stringify(NODE_ENV === 'stage'),
          __PROD__: JSON.stringify(NODE_ENV === 'production'),
        }),
      ],
    },
    modules.connectHtml(),
    modules.loadJavaScript(),
    modules.loadImages(),
    modules.loadSvg(),
    modules.loadFonts(),
  );
};
