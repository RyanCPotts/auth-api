'use strict';

const productsModel = (sequelize, DataTypes) => sequelize.define('Product', {
  name: { type: DataTypes.STRING, required: true },
  categories: { type: DataTypes.STRING, required: true },
  price: { type: DataTypes.DECIMAL, required: true },
  description: {type: DataTypes.STRING, required:true},
  inStock: {type: DataTypes.INTEGER}
});

module.exports = productsModel;
