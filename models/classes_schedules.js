'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classes_schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  classes_schedules.init({
    class_id: DataTypes.INTEGER,
    schedule_id: DataTypes.INTEGER,
    day_week: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'classes_schedules',
  });
  return classes_schedules;
};