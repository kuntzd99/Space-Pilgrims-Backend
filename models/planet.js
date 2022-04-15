'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Planet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Planet.hasMany(models.Community, { foreignKey: 'planetId' })
    }
  }
  Planet.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT,
      image: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      population: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Planet',
      tableName: 'planets'
    }
  )
  return Planet
}
