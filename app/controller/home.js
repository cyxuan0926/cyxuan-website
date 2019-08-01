'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { service } = this;
    const result = await service.articles.findBy({
      page_num: 1,
      page_size: 5,
    });

    await this.ctx.render('index.njk', {
      articles: result.data,
    });
  }
}

module.exports = HomeController;
