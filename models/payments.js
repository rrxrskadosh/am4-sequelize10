'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  payments.init({
    membership_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    amount: DataTypes.NUMERIC,
    payment_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'payments',
  });
  return payments;
};