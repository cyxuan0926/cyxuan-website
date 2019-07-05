'use strict';

const Controller = require('egg').Controller;

class OtherController extends Controller {
  // 关于我们
  async about() {
    await this.ctx.render('about.njk');
  }

  // 联系我们
  async contacts() {
    await this.ctx.render('contacts.njk');
  }

  // 搜索结果页
  async search() {
    await this.ctx.render('search.njk');
  }
}

module.exports = OtherController;
