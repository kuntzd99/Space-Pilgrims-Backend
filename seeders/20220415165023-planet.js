'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    let planets = [
      {
        name: 'Mercury',
        description: '',
        image: 'https://i.ibb.co/NYXdCM9/mercury.jpg',
        population: 0,
        orbit: 15,
        size: 30,
        speed: 10,
        zIndex: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Venus',
        description: '',
        image: 'https://i.ibb.co/rmVDk3p/venus.jpg',
        population: 0,
        orbit: 20,
        size: 33,
        speed: 15,
        zIndex: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Earth',
        description: '',
        image: 'https://i.ibb.co/c3bbR1m/earth.jpg',
        population: 0,
        orbit: 25,
        size: 33,
        speed: 20,
        zIndex: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mars',
        description: '',
        image: 'https://i.ibb.co/P6fZjNn/mars.jpg',
        population: 0,
        orbit: 30,
        size: 30,
        speed: 15,
        zIndex: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jupiter',
        description: '',
        image: 'https://i.ibb.co/MGSW8B0/jupiter.jpg',
        population: 0,
        orbit: 35,
        size: 50,
        speed: 40,
        zIndex: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Saturn',
        description: '',
        image: 'https://i.ibb.co/X3Wmq2D/saturn.jpg',
        population: 0,
        orbit: 40,
        size: 45,
        speed: 45,
        zIndex: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Uranus',
        description: '',
        image: 'https://i.ibb.co/nzhcdXW/uranus.jpg',
        population: 0,
        orbit: 45,
        size: 35,
        speed: 60,
        zIndex: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Neptune',
        description: '',
        image: 'https://i.ibb.co/KVmHwhh/neptune.jpg',
        population: 0,
        orbit: 50,
        size: 35,
        speed: 85,
        zIndex: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Planet9',
        description: '',
        image: 'https://i.ibb.co/8rDHxNX/planet9.jpg',
        population: 0,
        orbit: 55,
        size: 40,
        speed: 95,
        zIndex: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('planets', planets)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('planets')
  }
}
