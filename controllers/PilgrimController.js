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

const UpdatePilgrim = async (req, res) => {
  try {
    let pilgrimId = parseInt(req.params.pilgrim_id)
    let updatedPilgrim = await Pilgrim.update(req.body, {
      where: { id: pilgrimId },
      returning: true
    })
    res.send(updatedPilgrim)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPilgrimsByCommunity,
  UpdatePilgrim
}
