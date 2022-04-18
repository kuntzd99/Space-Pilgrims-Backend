const { Comment } = require('../models')

const GetCommentsByCommunity = async (req, res) => {
  try {
    let communityId = parseInt(req.params.community_id)
    const comments = await Comment.findAll({
      where: { communityId: communityId }
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    let communityId = parseInt(req.params.community_id)
    let pilgrimId = parseInt(req.params.pilgrim_id)
    let commentBody = {
      communityId,
      pilgrimId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCommentsByCommunity,
  CreateComment
}
