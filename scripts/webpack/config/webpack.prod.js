// Core
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
import merge from 'webpack-merge';

// Constants
import { PROJECT_ROOT, SOURCE } from '../constants';

// Modules
import * as modules from '../modules';

// Config
import getCommonConfig from './webpack.common';

export default () => {
  return merge(
    getCommonConfig(),
    {
      mode: 'none',
      devtool: false,
      entry: [SOURCE],
    },
    modules.loadProdCss(),
    modules.optimizeBuild(),
    modules.setupBuildAnalysis(),
  );
};
