'use strict';

const Service = require('../core/base-service');

class ArticlesService extends Service {
  async find(article_id) {
    const result = await this.app.mysql.select('tb_articles', {
      where: { article_id },
      columns: [ 'article_title', 'article_subtitle', 'article_author', 'article_source', 'article_description', 'article_content', 'article_publish_time' ],
      limit: 1,
    });

    if (result.length > 0) {
      result[0].article_publish_time = new Date(result[0].article_publish_time).getTime();
      return result[0];
    }
  }

  async findBy({ page_num, page_size, keyword }) {
    const filterSql = this.createSingleTableFilterSql({
      table: 'tb_articles',
      where: [
        {
          key: 'article_title',
          value: keyword,
          operator: 'LIKE',
        },
        {
          key: 'article_content',
          value: keyword,
          operator: 'LIKE',
          logical: 'OR',
        },
        {
          key: 'article_status',
          value: 2,
          operator: '=',
        },
      ],
    });

    const querySql = `
      SELECT article_id, article_title, article_subtitle, article_cover, article_description, article_publish_time
      FROM tb_articles
      WHERE ${filterSql}
      ORDER BY article_istop DESC, article_rank, article_publish_time DESC
      LIMIT ? OFFSET ?;
    `;

    const total_rows = await this.getRows('tb_articles', filterSql);
    const articles = await this.app.mysql.query(
      querySql,
      [ page_size, page_size * (page_num - 1) ]
    );

    articles.forEach(article => {
      article.article_publish_time = new Date(article.article_publish_time).getTime();
    });

    return {
      data: articles,
      meta: {
        pagination: {
          has_previous: page_num > 1,
          has_next: page_num * page_size < total_rows,
          page_size,
          page_num,
          total_rows,
          total_pages: Math.ceil(total_rows / page_size),
        },
      },
    };
  }

  async findByHack({
    page_num = 1,
    page_size = 5,
    firstPageSize = 5,
    secondPageSize = 8,
  }) {
    const querySql = `
      SELECT article_id, article_title, article_subtitle, article_cover, article_description, article_publish_time
      FROM tb_articles
      WHERE article_status = 2
      ORDER BY article_istop DESC, article_rank, article_publish_time DESC
      LIMIT ? OFFSET ?;
    `;

    const total_rows = await this.getRows('tb_articles', 'article_status = 2');
    const articles = await this.app.mysql.query(
      querySql,
      [ page_size, page_size * (page_num - 1) - (page_size - firstPageSize) ]
    );

    articles.forEach(article => {
      article.article_publish_time = new Date(article.article_publish_time).getTime();
    });

    const currentRows = page_num > 1 ? firstPageSize + (page_num - 1) * page_size : firstPageSize;
    const total_pages = total_rows <= firstPageSize ? 1 : 1 + Math.ceil((total_rows - firstPageSize) / secondPageSize);

    return {
      data: articles,
      meta: {
        pagination: {
          has_previous: page_num > 1,
          has_next: currentRows < total_rows,
          page_size,
          page_num,
          total_rows,
          total_pages,
        },
      },
    };
  }
}

module.exports = ArticlesService;
