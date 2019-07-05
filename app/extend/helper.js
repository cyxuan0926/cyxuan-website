'use strict';

/**
 * 检测是否为父子路由（相同路由也返回 ture）
 * @param {String} parent 父路由
 * @param {String} child 子路由
 * @return {Boolean} 是否为父子路由
 */
function isSubRoute(parent, child) {
  if (parent === '/') {
    return parent === child;
  }

  return new RegExp(`^${parent}`).test(child);
}

module.exports = {
  isSubRoute,
};
