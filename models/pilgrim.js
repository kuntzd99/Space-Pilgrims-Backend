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
      Pilgrim.hasMany(models.Comment, { foreignKey: 'pilgrimId' })
      Pilgrim.hasMany(models.Message, { foreignKey: 'sentTo' })
      Pilgrim.hasMany(models.Message, { foreignKey: 'sentFrom' })
      Pilgrim.hasMany(models.Community, { foreignKey: 'creatorId' })
    }
  }
  Pilgrim.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlphanumeric: true
        }
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      communityId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'communities',
          key: 'id'
        }
      },
      image: DataTypes.STRING,
      bio: DataTypes.TEXT,
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
