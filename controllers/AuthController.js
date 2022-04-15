const { Planet, Pilgrim, Community } = require('../models')
const middleware = require('../middleware')

// Login to pilgrim account
const Login = async (req, res) => {
  try {
    const pilgrim = await Pilgrim.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if (
      pilgrim &&
      (await middleware.comparePassword(
        pilgrim.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: pilgrim.id,
        username: pilgrim.username
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({
      status: 'Error',
      msg: 'You are not authorized to enter this page. Please vacate immediately!'
    })
  } catch (error) {
    throw error
  }
}

// Register to become a pilgrim!
const Register = async (req, res) => {
  try {
    const { username, password, email } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const pilgrim = await Pilgrim.create({ username, passwordDigest, email })
    res.send(pilgrim)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register
}
