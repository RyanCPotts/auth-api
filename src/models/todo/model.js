'use strict';

const todoModel = (sequelize, DataTypes) => sequelize.define('Todos', {
  text: { type: DataTypes.STRING, required: true },
  assignee: { type: DataTypes.STRING, required: true },
  complete: { type: DataTypes.BOOLEAN, required: true },
  difficulty: { type: DataTypes.INTEGER, required: true }
});

module.exports = todoModel;
