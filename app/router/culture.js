'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const culture = router.namespace('/culture');

  // 企业文化
  culture.get('/', controller.culture.index);
  // 企业文化文章详情
  culture.get('/:article_id', controller.culture.article);
};
