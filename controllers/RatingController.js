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

const GetAverageRating = async (req, res) => {
  try {
    let planetId = parseInt(req.params.planet_id)
    let ratingArray = []
    let sum = 0
    let ratings = await Rating.findAll({
      where: { planetId: planetId }
    })
    ratings.map((rating) => ratingArray.push(rating.rating))

    res.send(ratingArray)
  } catch (error) {
    throw error
  }
}

module.exports = {
  PostRating,
  GetAverageRating
}
