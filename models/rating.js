'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rating.belongsTo(models.Planet, { foreignKey: 'planetId' })
    }
  }
  Rating.init(
    {
      rating: DataTypes.INTEGER,
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
      modelName: 'Rating',
      tableName: 'ratings'
    }
  )
  return Rating
}
