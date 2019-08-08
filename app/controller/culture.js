'use strict';

const Controller = require('egg').Controller;

class CultureController extends Controller {
  async index() {
    const { ctx, service } = this;
    let { page_num = 1, page_size = 5 } = ctx.query;
    // let result = {};
    page_num = parseInt(page_num);
    page_size = page_num > 1 ? 8 : 5;

    // if (page_num > 1) {
    //   result = await service.articles.findByHack({ page_num, page_size: 8 });
    // } else {
    //   result = await service.articles.findBy({ page_num, page_size });
    // }
    const result = await service.articles.findByHack({ page_num, page_size });

    await ctx.render('culture.njk', {
      articles: result.data,
      pagination: result.meta.pagination,
    });
  }

  // 文章详情
  async article() {
    const { ctx, service } = this;
    const article_id = parseInt(ctx.params.article_id);
    const article = await service.articles.find(article_id);
    const result = await service.articles.findBy({
      page_num: 1,
      page_size: 1000,
    });

    const articles = result.data;
    const i = articles.findIndex(el => el.article_id === article_id);
    const prevArticle = i > 0 ? articles[i - 1] : null;
    const nextArticle = (i > -1 && i < articles.length - 1) ? articles[i + 1] : null;

    await ctx.render('article.njk', { article, prevArticle, nextArticle });
  }
}

module.exports = CultureController;
