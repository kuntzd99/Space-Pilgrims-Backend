'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Community extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Community.belongsTo(models.Planet, { foreignKey: 'planetId' })
      Community.hasMany(models.Traveler, { foreignKey: 'communityId' })
    }
  }
  Community.init(
    {
      name: DataTypes.STRING,
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
      modelName: 'Community',
      tableName: 'communities'
    }
  )
  return Community
}
