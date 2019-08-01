'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const product = router.namespace('/product');
  const zhzf = router.namespace('/product/zhzf');
  const zhjz = router.namespace('/product/zhjz');
  const zfhl = router.namespace('/product/zfhl');
  const zhzw = router.namespace('/product/zhzw');
  const jcyj = router.namespace('/product/jcyj');
  // const zhaf = router.namespace('/product/zhaf');

  // 产品中心
  product.redirect('/', '/product/zhzf', 302);

  // 智慧执法产品
  zhzf.get('/', controller.product.zhzf);
  zhzf.get('/gbth', controller.product.gbth); // 个别谈话识别平台
  zhzf.get('/znyyfy', controller.product.znyyfy); // 智能语音翻译系统

  // 智慧矫正产品
  zhjz.get('/', controller.product.zhjz);
  zhjz.get('/xfxt', controller.product.xfxt); // 消费系统
  zhjz.get('/ywt', controller.product.ywt); // 狱务通

  // 政法互联产品
  zfhl.get('/', controller.product.zfhl);
  zfhl.get('/zhba', controller.product.zhba); // 减刑假释智慧办案平台

  // 智慧政务产品
  zhzw.get('/', controller.product.zhzw);
  zhzw.get('/dddl', controller.product.dddl); // 单点登录系统

  // 决策预警产品
  jcyj.get('/', controller.product.jcyj);
  jcyj.get('/xwgjgz', controller.product.xwgjgz); // 行为轨迹跟踪系统

  // 智慧安防产品
  // zhaf.get('/', controller.product.zhaf);
};
