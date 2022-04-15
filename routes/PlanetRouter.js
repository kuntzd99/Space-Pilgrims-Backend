const Router = require('express').Router()
const controller = require('../controllers/PlanetController')

Router.get('/', controller.GetPlanets)
Router.get('/:planet_id', controller.GetPlanetById)

module.exports = Router
