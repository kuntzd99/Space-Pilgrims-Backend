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
      name: DataTypes.STRING,
      description: DataTypes.STRING,
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
