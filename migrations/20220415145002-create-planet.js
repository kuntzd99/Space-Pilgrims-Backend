'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('planets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      highRes: {
        type: Sequelize.TEXT
      },
      population: {
        type: Sequelize.INTEGER
      },
      orbit: {
        type: Sequelize.INTEGER
      },
      size: {
        type: Sequelize.INTEGER
      },
      speed: {
        type: Sequelize.INTEGER
      },
      zIndex: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('planets')
  }
}
