'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.Pilgrim, { foreignKey: 'sentFrom' })
      Message.belongsTo(models.Pilgrim, { foreignKey: 'sentTo' })
    }
  }
  Message.init(
    {
      sentTo: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'pilgrims',
          key: 'id'
        }
      },
      sentFrom: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'pilgrims',
          key: 'id'
        }
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Message',
      tableName: 'messages'
    }
  )
  return Message
}
