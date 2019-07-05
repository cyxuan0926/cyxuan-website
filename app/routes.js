'use strict';

const solutions = [
  {
    path: '/solutions',
    meta: { title: '解决方案' },
  },
  {
    path: '/solutions/zhjy',
    meta: { title: '智慧监狱精细化管理大数据平台' },
  },
  {
    path: '/solutions/jyzw',
    meta: { title: '教育专网系统' },
  },
  {
    path: '/solutions/ywgk',
    meta: { title: '狱务公开系统' },
  },
  {
    path: '/solutions/ycsphj',
    meta: { title: '远程视频会见与帮教系统' },
  },
];

const product = [
  {
    path: '/product',
    meta: { title: '产品中心' },
  },
  {
    path: '/product/zhzf',
    meta: { title: '智慧执法产品' },
  },
  {
    path: '/product/zhzf/gbth',
    meta: { title: '个别谈话识别平台' },
  },
  {
    path: '/product/zhzf/znyyfy',
    meta: { title: '智能语音翻译系统' },
  },
  {
    path: '/product/zhjz',
    meta: { title: '智慧矫正产品' },
  },
  {
    path: '/product/zhjz/xfxt',
    meta: { title: '消费系统' },
  },
  {
    path: '/product/zhjz/ywt',
    meta: { title: '狱务通' },
  },
  {
    path: '/product/zfhl',
    meta: { title: '政法互联产品' },
  },
  {
    path: '/product/zfhl/zhba',
    meta: { title: '减刑假释智慧办案平台' },
  },
  {
    path: '/product/zhzw',
    meta: { title: '智慧政务产品' },
  },
  {
    path: '/product/zhzw/dddl',
    meta: { title: '单点登录系统' },
  },
  {
    path: '/product/jcyj',
    meta: { title: '决策预警产品' },
  },
  {
    path: '/product/jcyj/xwgjgz',
    meta: { title: '行为轨迹跟踪系统' },
  },
  {
    path: '/product/zhaf',
    meta: { title: '智慧安防产品' },
  },
];

const culture = [
  {
    path: '/culture',
    meta: { title: '企业文化' },
  },
  {
    path: '/culture/:id',
    meta: { title: '企业文化详情页' },
  },
];

const routes = [
  {
    path: '/',
    meta: { title: '首页' },
  },
  {
    path: '/about',
    meta: { title: '关于我们' },
  },
  {
    path: '/contacts',
    meta: { title: '联系我们' },
  },
  {
    path: '/search',
    meta: { title: '搜索' },
  },
  ...culture,
  ...solutions,
  ...product,
];

module.exports = routes;
