const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/:community_id', controller.GetCommentsByCommunity)
router.post('/:community_id/:pilgrim_id', controller.CreateComment)
router.delete('/:comment_id', controller.DeleteComment)

module.exports = router
