'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedules extends Model {
    static associate(models) {
     this.belongsToMany(models.classes,{
       through: "classes_schedules",
       foreignKey: "class_id"
     })
    }
  };
  schedules.init({
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'schedules',
  });
  return schedules;
};