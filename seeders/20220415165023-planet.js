'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    let planets = [
      {
        name: 'Mercury',
        frenchName: 'mercure',
        description: '',
        image: 'https://i.ibb.co/NYXdCM9/mercury.jpg',
        highRes: 'https://i.ibb.co/MCHVq1c/Untitled-design-24.png',
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
        frenchName: 'venus',
        description: '',
        image: 'https://i.ibb.co/rmVDk3p/venus.jpg',
        highRes: 'https://i.ibb.co/87GNJQB/Untitled-design-13.png',
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
        frenchName: 'terre',
        description: '',
        image: 'https://i.ibb.co/c3bbR1m/earth.jpg',
        highRes: 'https://i.ibb.co/BNq3Jn8/Untitled-design-11.png',
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
        frenchName: 'mars',
        description: '',
        image: 'https://i.ibb.co/P6fZjNn/mars.jpg',
        highRes: 'https://i.ibb.co/2nqhWHd/Untitled-design-14.png',
        population: 0,
        orbit: 30,
        size: 30,
        speed: 25,
        zIndex: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jupiter',
        frenchName: 'jupiter',
        description: '',
        image: 'https://i.ibb.co/MGSW8B0/jupiter.jpg',
        highRes: 'https://i.ibb.co/cN32xg6/Untitled-design-21.png',
        population: 0,
        orbit: 38,
        size: 50,
        speed: 35,
        zIndex: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Saturn',
        frenchName: 'saturne',
        description: '',
        image: 'https://i.ibb.co/R2zLNFW/Untitled-design-28.png',
        highRes: 'https://i.ibb.co/SnBftkk/Untitled-design-12.png',
        population: 0,
        orbit: 47,
        size: 65,
        speed: 40,
        zIndex: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Uranus',
        frenchName: 'uranus',
        description: '',
        image: 'https://i.ibb.co/nzhcdXW/uranus.jpg',
        highRes: 'https://i.ibb.co/7Gz0vWt/Untitled-design-16.png',
        population: 0,
        orbit: 50,
        size: 35,
        speed: 50,
        zIndex: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Neptune',
        frenchName: 'neptune',
        description: '',
        image: 'https://i.ibb.co/KVmHwhh/neptune.jpg',
        highRes: 'https://i.ibb.co/vBBktVG/Untitled-design-15.png',
        population: 0,
        orbit: 55,
        size: 35,
        speed: 60,
        zIndex: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Planet9',
        frenchName: '',
        description: '',
        image: 'https://i.ibb.co/8rDHxNX/planet9.jpg',
        highRes: 'https://i.ibb.co/g7xGnDk/Untitled-design-23.png',
        population: 0,
        orbit: 60,
        size: 40,
        speed: 70,
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
