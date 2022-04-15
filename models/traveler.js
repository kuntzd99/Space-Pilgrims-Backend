'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Traveler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Traveler.belongsTo(models.Community, { foreignKey: 'communityId' })
    }
  }
  Traveler.init(
    {
      username: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      communityId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'communities',
          key: 'id'
        }
      },
      admin: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Traveler',
      tableName: 'travelers'
    }
  )
  return Traveler
}
