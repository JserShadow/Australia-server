'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const goodsSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: String },
    catagory: { type: String },
    imgs: { type: Array },
    introduction: { type: String },
  });
  return mongoose.model('Goods', goodsSchema);
};
