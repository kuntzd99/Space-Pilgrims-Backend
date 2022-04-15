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
    }
  }
  Traveler.init(
    {
      username: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      communityId: DataTypes.INTEGER,
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