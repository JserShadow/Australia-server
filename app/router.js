'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/getAllGoods', controller.goods.getAllGoods);
  router.post('/getSingleGoods', controller.goods.getSingleGoods)
  router.post('/saveGoods', controller.goods.saveGoods);
  router.post('/getGoodsByCatagory', controller.goods.getGoodsByCatagory);
  router.post('/deleteGoods', controller.goods.deleteGoods);
  router.post('/findGoodsById', controller.goods.findGoodsById);
  router.post('/updateGoods', controller.goods.updateGoods);
  router.post('/upload', controller.upload.handlePictures);
};
