const { Message } = require('../models')

const GetMessagesBySentTo = async (req, res) => {
  try {
    let pilgrimId = parseInt(req.params.pilgrim_id)
    const messages = await Message.findAll({ where: { sentTo: pilgrimId } })
    res.send(messages)
  } catch (error) {
    throw error
  }
}

const DeleteMessage = async (req, res) => {
  try {
    let messageId = parseInt(req.params.message_id)
    await Message.destroy({ where: { id: messageId } })
    res.send({ message: `Deleted message with an id of ${messageId}` })
  } catch (error) {
    throw error
  }
}

const SendMessage = async (req, res) => {
  try {
    let sentTo = parseInt(req.params.sent_to)
    let sentFrom = parseInt(req.params.sent_from)
    let messageBody = {
      sentTo,
      sentFrom,
      ...req.body
    }
    let message = await Message.create(messageBody)
    res.send(message)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetMessagesBySentTo,
  DeleteMessage,
  SendMessage
}
