'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({Watch, Customer}) {
      this.hasMany(Watch, {foreignKey: 'orderId'});
      this.belongsTo(Customer, {foreignKey: 'customerId'});
    }
  }
  Order.init({
    customerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'id',
      }, 
       onDelete: "CASCADE",
    },
    orderDescription: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    img1: {
      type: DataTypes.TEXT
    },
    img2: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};