'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    static associate(models) {
      //Relación de Muchos a Muchos
      this.belongsToMany(models.clients, {
        through: "clients_classes",
        foreignKey: "client_id"
      });
      this.belongsTo(models.instructors,{
        //Relación llave foranea Pertenece a Instructors
        foreignKey: "instructor_id"
      });
      //Relación de Muchos a Muchos
      this.belongsToMany(models.schedules, {
        through: "classes_schedules",
        foreignKey: "schedule_id"
      });
    }
  };
  classes.init({
    name_class: DataTypes.STRING,
    instructor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'classes',
  });
  return classes;
};