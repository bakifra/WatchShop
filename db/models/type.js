const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    static associate({ Watch }) {
      this.hasMany(Watch, { foreignKey: 'typeId' });
    }
  }
  Type.init({
    type_name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};
