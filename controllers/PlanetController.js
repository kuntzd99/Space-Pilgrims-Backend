const { Planet } = require('../models')

const GetPlanets = async (req, res) => {
  try {
    const planets = await Planet.findAll()
    res.send(planets)
  } catch (error) {
    throw error
  }
}

const GetPlanetById = async (req, res) => {
  try {
    let planetId = parseInt(req.params.planet_id)
    const planet = await Planet.findAll({ where: { id: planetId } })
    res.send(planet)
  } catch (error) {
    throw error
  }
}

const UpdatePlanet = async (req, res) => {
  try {
    let planetId = parseInt(req.params.planet_id)
    let updatedPlanet = await Planet.update(req.body, {
      where: { id: planetId },
      returning: true
    })
    res.send(updatedPlanet)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPlanets,
  GetPlanetById,
  UpdatePlanet
}
