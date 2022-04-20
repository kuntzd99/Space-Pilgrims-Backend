const Router = require('express').Router()
const controller = require('../controllers/PlanetImageController')

Router.get('/:planet_id/', controller.GetPlanetImages)

module.exports = Router
