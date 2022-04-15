const router = require('express').Router()
const controller = require('../controllers/PilgrimController')
const middleware = require('../middleware')

router.get('/:community_id', controller.GetPilgrimsByCommunity)

module.exports = router
