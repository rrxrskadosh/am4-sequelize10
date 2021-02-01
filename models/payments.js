'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    static associate(models) {
     //Relación y Asociación de UNO a Muchos (Payments pertenece a Clients y Memberships)
      this.belongsTo(models.clients, {
        //Identificando la llave foranea de la relación
        foreingKey: "client_id"
      });
      this.belongsTo(models.memberships, {
        foreingKey: "membership_id"
      });
    }
  };
  payments.init({
    client_id: DataTypes.INTEGER,
    membership_id: DataTypes.INTEGER,
    amount: DataTypes.NUMERIC,
    payment_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'payments',
  });
  return payments;
};