'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class instructors extends Model {
    static associate(models) {
      this.hasOne(models.classes,{
        foreignKey:"instructor_id"
      })
    }
  };
  instructors.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'instructors',
  });
  return instructors;
};