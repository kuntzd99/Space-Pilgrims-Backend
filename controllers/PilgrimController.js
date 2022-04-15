const { Pilgrim } = require('../models')

const GetPilgrimsByCommunity = async (req, res) => {
  try {
    let communityId = parseInt(req.params.community_id)
    const pilgrims = await Pilgrim.findAll({
      where: { communityId: communityId }
    })
    res.send(pilgrims)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPilgrimsByCommunity
}
