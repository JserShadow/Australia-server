'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {
  async handlePictures() {
    const ctx = this.ctx;
    const stream = await ctx.getFileStream();
    const base64Data = stream.read().toString('base64');
    const result = 'data:' + stream.mime + ';base64,' + base64Data;
    ctx.body = {
      img: result,
    };
  }
}

module.exports = UploadController;
