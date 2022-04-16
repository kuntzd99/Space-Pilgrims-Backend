const { Community, Pilgrim } = require('../models')

const GetCommunitiesByPlanet = async (req, res) => {
  try {
    let planetId = parseInt(req.params.planet_id)
    const communities = await Community.findAll({
      where: { planetId: planetId }
    })
    res.send(communities)
  } catch (error) {
    throw error
  }
}

const GetCommunityById = async (req, res) => {
  try {
    let communityId = parseInt(req.params.community_id)
    const community = await Community.findByPk(communityId)
    res.send(community)
  } catch (error) {
    throw error
  }
}

const CreateCommunity = async (req, res) => {
  try {
    let planetId = parseInt(req.params.planet_id)
    let communityBody = {
      planetId,
      ...req.body
    }
    let community = await Community.create(communityBody)
    res.send(community)
  } catch (error) {
    throw error
  }
}

const UpdateCommunity = async (req, res) => {
  try {
    let communityId = parseInt(req.params.community_id)
    let updatedCommunity = await Community.update(req.body, {
      where: { id: communityId },
      returning: true
    })
    res.send(updatedCommunity)
  } catch (error) {
    throw error
  }
}

const DeleteCommunity = async (req, res) => {
  try {
    let communityId = parseInt(req.params.community_id)
    await Community.destroy({ where: { id: communityId } })
    Pilgrim.findAll({
      where: { communityId: communityId }
    }).update({ communityId: null })
    res.send({ message: `Deleted community with an id of ${communityId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCommunitiesByPlanet,
  CreateCommunity,
  UpdateCommunity,
  DeleteCommunity,
  GetCommunityById
}
