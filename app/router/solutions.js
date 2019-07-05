'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const solutions = router.namespace('/solutions');

  // 解决方案
  solutions.get('/', controller.solutions.zhjy);
  solutions.get('/zhjy', controller.solutions.zhjy); // 智慧监狱精细化管理平台
  solutions.get('/jyzw', controller.solutions.jyzw); // 教育专网系统
  solutions.get('/ywgk', controller.solutions.ywgk); // 狱务公开系统
  solutions.get('/ycsphj', controller.solutions.ycsphj); // 远程视频会见与帮教系统
};
