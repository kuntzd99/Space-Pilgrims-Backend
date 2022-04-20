const { PlanetImage } = require('../models')

const GetPlanetImages = async (req, res) => {
  try {
    let planetId = parseInt(req.params.planet_id)
    const planetImages = await PlanetImage.findAll({
      where: { planetId: planetId }
    })
    res.send(planetImages)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPlanetImages
}
