const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'customerId' });
    }
  }
  Customer.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    phone: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};
