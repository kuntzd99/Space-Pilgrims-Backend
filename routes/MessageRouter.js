const router = require('express').Router()
const controller = require('../controllers/MessageController')
const middleware = require('../middleware')

router.get('/:pilgrim_id', controller.GetMessagesBySentTo)
router.post('/:sent_to/:sent_from', controller.SendMessage)
router.delete('/:message_id', controller.DeleteMessage)

module.exports = router
