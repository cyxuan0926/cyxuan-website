'use strict';

const Controller = require('egg').Controller;

class CultureController extends Controller {
  async index() {
    await this.ctx.render('culture.njk');
  }

  // 文章详情
  async article() {
    const { ctx } = this;
    await ctx.render('article.njk', { id: ctx.params.id });
  }
}

module.exports = CultureController;
