/* eslint valid-jsdoc: "off" */
'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.cluster = {
    listen: {
      port: 7001,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1560938793735_2936';

  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.njk': 'nunjucks',
    },
  };

  config.middleware = [ 'breadcrumb' ];

  config.static = {
    gzip: true,
    dir: [
      path.resolve(process.cwd(), 'app/public'),
      path.resolve(process.cwd(), '../official-website-upload'),
    ],
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
