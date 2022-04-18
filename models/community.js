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
      Community.hasMany(models.Pilgrim, { foreignKey: 'communityId' })
    }
  }
  Community.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      planetId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'planets',
          key: 'id'
        }
      },
      primaryColor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      secondaryColor: {
        type: DataTypes.STRING,
        allowNull: false
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
