const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Watch extends Model {
    static associate({ Type, Order }) {
      this.belongsTo(Type, { foreignKey: 'typeId' });
      this.belongsTo(Order, { foreignKey: 'orderId' });
    }
  }
  Watch.init(
    {
      typeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Types',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      orderId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Watch',
    },
  );
  return Watch;
};
