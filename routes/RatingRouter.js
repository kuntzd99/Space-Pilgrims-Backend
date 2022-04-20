const Router = require('express').Router()
const controller = require('../controllers/RatingController')

Router.post('/:planet_id/', controller.PostRating)

module.exports = Router
