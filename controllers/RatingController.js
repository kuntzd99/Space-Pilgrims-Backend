const { Rating } = require('../models')

const PostRating = async (req, res) => {
  try {
    let planetId = parseInt(req.params.planet_id)
    let ratingBody = {
      planetId,
      ...req.body
    }
    let rating = await Rating.create(ratingBody)
    res.send(rating)
  } catch (error) {
    throw error
  }
}

module.exports = {
  PostRating
}
