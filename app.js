const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const PilgrimRouter = require('./routes/PilgrimRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/auth', AuthRouter)
app.use('/pilgrim', PilgrimRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
