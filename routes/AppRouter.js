const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const PilgrimRouter = require('./PilgrimRouter')
const PlanetRouter = require('./PlanetRouter')
const CommunityRouter = require('./CommunityRouter')
const CommentRouter = require('./CommentRouter')
const MessageRouter = require('./MessageRouter')
const RatingRouter = require('./RatingRouter')

Router.use('/auth', AuthRouter)
Router.use('/pilgrim', PilgrimRouter)
Router.use('/planet', PlanetRouter)
Router.use('/community', CommunityRouter)
Router.use('/comment', CommentRouter)
Router.use('/message', MessageRouter)
Router.use('/rating', RatingRouter)

module.exports = Router
