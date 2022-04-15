'use strict'
const falso = require('@ngneat/falso')

module.exports = {
  async up(queryInterface, Sequelize) {
    let planets = [...Array(9)].map((_) => ({
      name: falso.randWord(),
      description: falso.randTextRange({ min: 10, max: 100 }),
      image: falso.randImg(),
      population: falso.randNumber(),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('planets', planets)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('planets')
  }
}
