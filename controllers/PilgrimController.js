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

const GetAllPilgrims = async (req, res) => {
  try {
    const pilgrims = await Pilgrim.findAll()
    res.send(pilgrims)
  } catch (error) {
    throw error
  }
}

const GetPilgrimById = async (req, res) => {
  try {
    let pilgrimId = parseInt(req.params.pilgrim_id)
    const pilgrim = await Pilgrim.findByPk(pilgrimId)
    res.send(pilgrim)
  } catch (error) {
    throw error
  }
}

const UpdatePilgrim = async (req, res) => {
  try {
    let pilgrimId = parseInt(req.params.pilgrim_id)
    let pilgrim = await Pilgrim.findByPk(pilgrimId)
    if (pilgrim.communityId && req.body.communityId) {
      return res.send(null)
    }
    if (!pilgrim.communityId && !req.body.communityId) {
      return res.send(null)
    }
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
  UpdatePilgrim,
  GetPilgrimById,
  GetAllPilgrims
}
