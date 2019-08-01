'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },

  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
};
