const Router = require('express').Router()
const controller = require('../controllers/PlanetController')

Router.get('/', controller.GetPlanets)
Router.get('/:planet_id', controller.GetPlanetById)
Router.put('/:planet_id', controller.UpdatePlanet)

module.exports = Router
