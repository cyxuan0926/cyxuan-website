'use strict';

const Controller = require('egg').Controller;

// 解决方案
class SolutionsController extends Controller {
  // 智慧监狱精细化大管理平台
  async zhjy() {
    await this.ctx.render('product-zhjy.njk');
  }

  // 教育专网系统
  async jyzw() {
    await this.ctx.render('product-jyzw.njk');
  }

  // 狱务公开系统
  async ywgk() {
    await this.ctx.render('product-ywgk.njk');
  }

  // 远程视频会见与帮教系统
  async ycsphj() {
    await this.ctx.render('product-ycsphj.njk');
  }
}

module.exports = SolutionsController;
