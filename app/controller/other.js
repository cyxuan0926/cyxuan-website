'use strict';

const Controller = require('egg').Controller;

class OtherController extends Controller {
  // 关于我们
  async about() {
    await this.ctx.render('about.njk');
  }

  // 联系我们
  async contacts() {
    const { ctx, service } = this;
    const contacts = await service.contacts.findAll();

    await ctx.render('contacts.njk', { contacts });
  }

  // 搜索结果页
  async search() {
    const { ctx, service } = this;
    const { page_num = 1, page_size = 5 } = ctx.query;
    const result = await service.articles.findBy({
      page_num: parseInt(page_num),
      page_size: parseInt(page_size),
      keyword: ctx.query.keyword,
    });
    console.log('search', ctx.query.keyword, result);

    await ctx.render('search.njk', {
      keyword: ctx.query.keyword,
      articles: result.data,
      pagination: result.meta.pagination,
    });
  }
}

module.exports = OtherController;
