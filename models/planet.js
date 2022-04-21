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
      Planet.hasMany(models.Rating, { foreignKey: 'planetId' })
      Planet.hasMany(models.PlanetImage, { foreignKey: 'planetId' })
    }
  }
  Planet.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      frenchName: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      highRes: DataTypes.TEXT,
      population: DataTypes.INTEGER,
      orbit: DataTypes.INTEGER,
      size: DataTypes.INTEGER,
      speed: DataTypes.INTEGER,
      zIndex: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Planet',
      tableName: 'planets'
    }
  )
  return Planet
}
