'use strict';

const routes = require('../routes');

/**
 * 生成面包屑数据
 * @param {String} path 路由路径
 * @return {Array} 面包屑数据
 * @example
 * createBreadcrumb('/about')
 * // => [{ path: '/', title: '首页' }, { path: '/about', title: '关于我们' }]
 */
const createBreadcrumb = path => {
  const pathArr = path === '/' ? [ '/' ] : path.split('/');

  return pathArr.map((item, index, pathArr) => {
    const _path = item === '' ? '/' : pathArr.slice(0, index + 1).join('/');
    const route = routes.find(route => {
      const routePattern = new RegExp(
        `^${route.path.replace(/:\S+/g, '\\d+')}$`
      );
      return routePattern.test(_path);
    });

    return { path: _path, title: route && route.meta.title };
  });
};

module.exports = () => {
  return async function breadcrumb(ctx, next) {
    ctx.locals.path = ctx.path;
    ctx.locals.breadcrumb = createBreadcrumb(ctx.path);
    await next();
  };
};
