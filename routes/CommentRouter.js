const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/:community_id', controller.GetCommentsByCommunity)
router.post('/:community_id/:pilgrim_id', controller.CreateComment)

module.exports = router
