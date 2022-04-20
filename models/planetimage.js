'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class PlanetImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PlanetImage.belongsTo(models.Planet, { foreignKey: 'planetId' })
    }
  }
  PlanetImage.init(
    {
      image: DataTypes.STRING,
      planetId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'planets',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'PlanetImage',
      tableName: 'planetimages'
    }
  )
  return PlanetImage
}
