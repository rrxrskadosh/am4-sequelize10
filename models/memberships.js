'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class memberships extends Model {
    static associate(models) {
      this.hasMany(models.payments, {
        //Identificando la llave foranea de la relación
        foreignKey: "membership_id"
      });
    }
  };
  memberships.init({
    name_membership: DataTypes.STRING,
    price: DataTypes.INTEGER,
    duration_month: DataTypes.SMALLINT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'memberships',
  });
  return memberships;
};