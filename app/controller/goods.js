'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async getAllGoods() {
    const mongoData = await this.ctx.model.Goods.find({});
    this.ctx.body = mongoData;
  }
  async saveGoods() {
    const content = this.ctx.request.body;
    const data = new this.ctx.model.Goods({
      name: content.name,
      price: content.price,
      catagory: content.price,
      imgs: content.imgs.concat(),
      introduction: content.introduction,
    });
    await data.save();
    this.ctx.body = {
      message: 'ok',
    };
  }
  async getGoodsByCatagory() {
    const { selectedCatagory } = this.ctx.request.body;
    const foundData = await this.ctx.model.Goods.find({ catagory: selectedCatagory });
    this.ctx.body = foundData;
  }
}

module.exports = GoodsController;
