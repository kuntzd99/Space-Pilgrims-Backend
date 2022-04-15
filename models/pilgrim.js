'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pilgrim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pilgrim.belongsTo(models.Community, { foreignKey: 'communityId' })
    }
  }
  Pilgrim.init(
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
      image: DataTypes.STRING,
      admin: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Pilgrim',
      tableName: 'pilgrims'
    }
  )
  return Pilgrim
}
