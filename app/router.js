'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/getAllGoods', controller.goods.getAllGoods);
  router.post('/saveGoods', controller.goods.saveGoods);
  router.post('/getGoodsByCatagory', controller.goods.getGoodsByCatagory);

  // router.post('/upload', controller.upload.handlePictures);
  router.post('/upload', controller.upload.handlePictures);
};
