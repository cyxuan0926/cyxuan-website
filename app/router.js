'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index); // 首页
  router.get('/about', controller.other.about); // 关于我们
  router.get('/contacts', controller.other.contacts); // 联系我们
  router.get('/search', controller.other.search); // 搜索结果页
  router.get('/browser', controller.other.browser);
};
