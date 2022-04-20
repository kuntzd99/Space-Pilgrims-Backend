'use strict'

const middleware = require('../middleware')

module.exports = {
  async up(queryInterface, Sequelize) {
    const madameX = await middleware.hashPassword('madameX')
    let admin = [
      {
        username: 'madamex',
        name: 'Madame X',
        email: 'madamex@madamex.com',
        passwordDigest: madameX,
        image:
          'https://assets.ozy.com/ozy-prod/2019/07/gettyimages487836603copy.jpg?width=600&height=337',
        bio: 'Space Pilgrims would usher us into new era and set the new world order!',
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('pilgrims', admin)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pilgrims')
  }
}
