'use strict';

const Controller = require('egg').Controller;

// 产品中心
class ProductController extends Controller {
  // 智慧执法产品
  async zhzf() {
    await this.ctx.render('product-center-zhzf.njk');
  }

  // 智慧矫正产品
  async zhjz() {
    await this.ctx.render('product-center-zhjz.njk');
  }

  // 政法互联产品
  async zfhl() {
    await this.ctx.render('product-center-zfhl.njk');
  }

  // 智慧政务产品
  async zhzw() {
    await this.ctx.render('product-center-zhzw.njk');
  }

  // 决策预警产品
  async jcyj() {
    await this.ctx.render('product-center-jcyj.njk');
  }

  // 智慧安防产品
  async zhaf() {
    await this.ctx.render('product-center-zhaf.njk');
  }

  // 个别谈话识别平台
  async gbth() {
    await this.ctx.render('product-gbth.njk');
  }

  // 智能语音翻译系统
  async znyyfy() {
    await this.ctx.render('product-znyyfy.njk');
  }

  // 消费系统
  async xfxt() {
    await this.ctx.render('product-xfxt.njk');
  }

  // 狱务通
  async ywt() {
    await this.ctx.render('product-ywt.njk');
  }

  // 减刑假释智慧办案平台
  async zhba() {
    await this.ctx.render('product-zhba.njk');
  }

  // 单点登录系统
  async dddl() {
    await this.ctx.render('product-dddl.njk');
  }

  // 行为轨迹跟踪系统
  async xwgjgz() {
    await this.ctx.render('product-xwgjgz.njk');
  }
}

module.exports = ProductController;
