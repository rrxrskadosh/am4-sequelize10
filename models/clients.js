'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clients extends Model {
    static associate(models) {
      this.hasMany(models.payments, {
        //Relación de uno a Muchos de Clients a Classes
        //Identificando la llave foranea de la relación
        foreignKey: "client_id"
      });
      this.belongsToMany(models.classes, {
        //Relación de Muchos a Muchos de Clients a Classes
        //Identificando la llave foranea de la relación
        through: "clients_classes",
        foreignKey: "class_id"
      });
    }
  };
  clients.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    telf: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'clients',
  });
  return clients;
};