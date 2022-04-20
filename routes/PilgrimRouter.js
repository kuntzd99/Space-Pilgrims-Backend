const router = require('express').Router()
const controller = require('../controllers/PilgrimController')
const middleware = require('../middleware')

router.get('/:community_id', controller.GetPilgrimsByCommunity)
router.get('/pilgrims/:pilgrim_id', controller.GetPilgrimById)
router.put('/:pilgrim_id', controller.UpdatePilgrim)
router.get('/', controller.GetAllPilgrims)

module.exports = router
