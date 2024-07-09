'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const Collection = require('./data-collection.js');
const userModel = require('./users.js');
const productsModel = require('./products/model.js')
const categoriesModel = require('./categories/model.js')
const environment = process.env.NODE_ENV;
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const testOrProduction = (environment === 'test' || environment === 'production');

const sequelize = new Sequelize(DATABASE_URL, testOrProduction ? {logging: false} : {});
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes)
const products = productsModel(sequelize, DataTypes);
const categories = categoriesModel(sequelize, DataTypes)

module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  products: new Collection(products),
  categories: new Collection(categories),
  users,
};
