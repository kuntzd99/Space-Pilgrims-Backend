const Router = require('express').Router()
const controller = require('../controllers/RatingController')

Router.post('/:planet_id/', controller.PostRating)
Router.get('/:planet_id', controller.GetAverageRating)

module.exports = Router
