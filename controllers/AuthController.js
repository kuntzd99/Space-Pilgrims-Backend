const { Planet, Pilgrim, Community } = require('../models')
const middleware = require('../middleware')
const { user } = require('pg/lib/defaults')

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
        username: pilgrim.username,
        image: pilgrim.image,
        bio: pilgrim.bio,
        communityId: pilgrim.communityId
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

// Login Admin Account

// const LoginAdmin = async (req, res) => {
//   try {
//     const pilgrim = await Pilgrim.findOne({
//       // where: { username: req.body.username },
//       where: { admin: req.body.admin },
//       raw: true
//     })
//     if (
//       pilgrim &&
//       req.body.admin === true &&
//       (await middleware.comparePassword(
//         pilgrim.passwordDigest,
//         req.body.password
//       ))
//     ) {
//       let payload = {
//         id: pilgrim.id,
//         username: pilgrim.username,
//         image: pilgrim.image,
//         bio: pilgrim.bio,
//         admin: pilgrim.admin,
//         communityId: pilgrim.communityId
//       }
//       console.log(payload)
//       let token = middleware.createAdminToken(payload)
//       return res.send({ user: payload, token })
//     }
//     res.status(401).send({
//       status: 'Error',
//       msg: 'You are not authorized to enter this page. Please vacate immediately!'
//     })
//   } catch (error) {
//     throw error
//   }
// }

// Register to become a pilgrim!
const Register = async (req, res) => {
  try {
    const { username, name, image, bio, email, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const pilgrim = await Pilgrim.create({
      username,
      name,
      image,
      bio,
      email,
      passwordDigest
    })
    res.send(pilgrim)
  } catch (error) {
    throw error
  }
}

// Update password

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const pilgrim = await Pilgrim.findByPk(req.params.pilgrim_id)
    if (
      pilgrim &&
      (await middleware.comparePassword(
        pilgrim.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await pilgrim.update({ passwordDigest })
      return res.send({ status: 'You got it!', payload: pilgrim })
    }
    res
      .status(401)
      .send({ status: 'Uh-oh, try again!', msg: "You can't do that!" })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  // LoginAdmin,
  Register,
  UpdatePassword,
  CheckSession
}
