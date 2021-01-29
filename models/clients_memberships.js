'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clients_memberships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  clients_memberships.init({
    client_id: DataTypes.INTEGER,
    membership_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'clients_memberships',
  });
  return clients_memberships;
};