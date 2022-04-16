const Router = require('express').Router()
const controller = require('../controllers/CommunityController')

Router.get('/:planet_id', controller.GetCommunitiesByPlanet)
Router.post('/:planet_id', controller.CreateCommunity)
Router.put('/:community_id', controller.UpdateCommunity)
Router.delete('/:community_id', controller.DeleteCommunity)
Router.get('/communities/:community_id', controller.GetCommunityById)

module.exports = Router
