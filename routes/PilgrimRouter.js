const router = require('express').Router()
const controller = require('../controllers/PilgrimController')
const middleware = require('../middleware')

router.get('/:community_id', controller.GetPilgrimsByCommunity)

router.put('/:pilgrim_id', controller.UpdatePilgrim)

module.exports = router
